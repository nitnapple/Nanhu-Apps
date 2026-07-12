---
title: "StoreKit 2 Guide"
date: "2026-06-28"
category: "Tutorials"
author: "Nitin Kumar"
readingTime: "8 min read"
summary: "How to implement secure, modern iOS in-app purchases and subscription flows using Apple's new StoreKit 2 Swift APIs."
---

StoreKit 2 introduces a modern, Swift-first API that makes implementing in-app purchases (IAP) and auto-renewable subscriptions safer and much less boilerplate-heavy.

### Defining Your Product Types
StoreKit 2 classifies products into consumables, non-consumables, auto-renewable subscriptions, and non-renewable subscriptions. Using Swift's async/await APIs, fetching products is simplified to a single query:

```swift
import StoreKit

class SubscriptionManager: ObservableObject {
    @Published var products: [Product] = []
    
    func fetchProducts() async {
        do {
            let storeProducts = try await Product.products(for: ["com.nanhu.fit60.monthly", "com.nanhu.fit60.yearly"])
            DispatchQueue.main.async {
                self.products = storeProducts
            }
        } catch {
            print("Failed to fetch StoreKit products: \(error)")
        }
    }
}
```

### Safe Transaction Verification
All transactions returned by StoreKit 2 are cryptographically signed as JWS (JSON Web Signature) tokens. Verification is handled natively on-device, preventing jailbreak bypasses:

```swift
func verifyTransaction(_ result: VerificationResult<Transaction>) -> Transaction? {
    switch result {
    case .unverified(_, let error):
        print("JWS verification failed: \(error)")
        return nil
    case .verified(let transaction):
        return transaction
    }
}
```

