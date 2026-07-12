---
title: "HealthKit Integration"
date: "2026-06-07"
category: "Tutorials"
author: "Nitin Kumar"
readingTime: "7 min read"
summary: "Implementing bi-directional Apple Health app data syncing for workouts, step counts, and active calories."
---

HealthKit enables applications to write and read health metrics safely under the strict control of user permissions.

### Requesting Health Permissions
Before querying records, you must request permission in your plist and programmatically trigger the authorization sheet:

```swift
import HealthKit

let healthStore = HKHealthStore()

func requestAccess() {
    let shareTypes: Set<HKSampleType> = [
        HKObjectType.workoutType(),
        HKQuantityType.quantityType(forIdentifier: .activeEnergyBurned)!
    ]
    let readTypes: Set<HKObjectType> = [
        HKQuantityType.quantityType(forIdentifier: .stepCount)!
    ]
    
    healthStore.requestAuthorization(toShare: shareTypes, read: readTypes) { success, error in
        if success {
            print("Access to HealthKit data approved.")
        }
    }
}
```

