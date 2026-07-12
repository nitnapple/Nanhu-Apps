---
title: "CloudKit Guide"
date: "2026-06-21"
category: "Tutorials"
author: "Nitin Kumar"
readingTime: "6 min read"
summary: "Architecting serverless data synchronization for your iOS applications with Apple CloudKit databases."
---

CloudKit provides a secure, cloud-based data store that links seamlessly with a user's iCloud account. It is the foundation for serverless sync in premium native iOS apps.

### Private vs. Public Databases
- **Private Database**: Stores user-specific data. Uses the user's iCloud storage allotment and requires the user to be logged in. Great for personal progress databases.
- **Public Database**: Accessible to all users of your application, regardless of whether they are signed in. Perfect for sharing global catalogs.

```swift
import CloudKit

let container = CKContainer.default()
let privateDatabase = container.privateCloudDatabase

func saveRecord(title: String) {
    let record = CKRecord(recordType: "UserTask")
    record["title"] = title as CKRecordValue
    
    privateDatabase.save(record) { record, error in
        if let error = error {
            print("Failed to sync record to iCloud: \(error)")
        }
    }
}
```

