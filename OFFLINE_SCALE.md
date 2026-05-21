Offline Scale (100k+ DAU)

Scope: SteerIn stays local-first (Room/DataStore). No backend dependency. Stability and device health are the scaling constraints.

Goals
- Crash-free sessions high.
- No ANR on startup/notifications/service.
- Battery usage sane (GPS + WorkManager).
- Storage growth bounded (DB + logs + backups).

Guardrails Implemented
- Settings hot-path reads: use `SettingsCache` (in-memory mirror of `SettingsDataStore`) to avoid blocking reads.
- Notification channels: created with fallback English strings to avoid IO/DataStore on app start.
- Local event log bounded: `AppLogger` rotates `events.csv` when it grows too large.
- Scheduled reminders: WorkManager periodic interval reduced in aggressiveness and constrained to `requiresBatteryNotLow`.
- Backup restore: validates `AppBackupSnapshot.version`.
- Manual backup: exports compressed `.zip` payloads and still accepts legacy plain JSON imports.
- Backup decode: validates expected archive entry and rejects oversized uncompressed payloads.

Operational Targets
- Crash-free sessions: 99.5%+ baseline.
- ANR rate: near 0.
- DB size per user: keep under ~200MB by introducing retention for long-running trackers.

Next Steps (when needed)
- Add explicit user-controlled retention/compaction policies for ride sessions/history tables.
- Add instrumentation tests for backup/restore and Room migrations.
- Add strict mode checks in debug builds to catch main-thread IO.
