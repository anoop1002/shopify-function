# Shopify Function: Tier-Based Quantity Discount

This Shopify Function applies a tier-based discount to products based on quantity in the cart. The discount logic checks for a specific product tag and applies discounts to qualifying items as follows:

- **Quantity ≥ 2**: 5% discount with the message "15% volume discount"
- **Quantity ≥ 4**: 10% discount with the message "20% volume discount"
- **Quantity ≥ 6**: 15% discount with the message "25% volume discount"

## Table of Contents
- [Overview](#overview)
- [Discount Tiers](#discount-tiers)
- [Requirements](#requirements)
- [Usage](#usage)
- [Installation](#installation)
- [Customization](#customization)

## Overview

This function reads discount criteria from Shopify product metafields and applies the appropriate discount tier to eligible products with the specified tag. The function ensures that only eligible products receive the correct discount and returns the JSON structure needed to apply these discounts in Shopify.

## Discount Tiers

The discount tiers are defined as follows:

| Quantity | Discount % | Message               |
|----------|------------|-----------------------|
| ≥ 2      | 5%         | 15% volume discount   |
| ≥ 4      | 10%        | 20% volume discount   |
| ≥ 6      | 15%        | 25% volume discount   |

## Requirements

1. **Tagged Products**: Products must have the tag `volume_discount_bottle` to be eligible for discounts.
2. **Metafield Configuration**: Ensure the discount criteria are defined within metafields if you want dynamic discount tiers.
3. **Return JSON Structure**: The function must return a JSON object structured for Shopify’s `discountApplicationStrategy`, `targets`, and `value` fields.

## Usage

1. **Identify Eligible Products**: The function will check each line item in the cart for the `volume_discount_bottle` tag.
2. **Determine Discount Tier**: Based on the quantity of eligible products in the cart, the appropriate discount tier is selected and applied.

## Installation

1. Clone or download this repository to your Shopify Function project directory.
2. Ensure the required permissions and tags are correctly applied to products.
3. Deploy the function to your Shopify store.

## Creating a shopify App

```bash
npm init @shopify/app@latest  

> npx
> create-app

Welcome. Let’s get started by naming your app project. You can change it later.

?  Your project name?
✔  demoproject  #Here user need to enter project name

?  Get started building your app:

>  Build a Remix app (recommended)
   Build an extension-only app
   
✔  Build a Remix app (recommended)

?  For your Remix template, which language do you want?

>  JavaScript
   TypeScript
   

╭─ info ───────────────────────────────────────────────────────────────────────╮
│                                                                              │
│  Initializing project with `npm`                                             │
│  Use the `--package-manager` flag to select a different package manager.     │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯

▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
Installing dependencies with npm ...

╭─ success ────────────────────────────────────────────────────────────────────╮
│                                                                              │
│  demoproject is ready for you to build!                                      │
│                                                                              │
│  Next steps                                                                  │
│    • Run `cd demoproject`                                                    │
│    • For extensions, run `npm run shopify app generate extension`            │
│    • To see your app, run `npm run shopify app dev`                          │
│                                                                              │
│  Reference                                                                   │
│    • Shopify docs                                                            │
│    • For an overview of commands, run `npm run shopify app -- --help`        │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯

# this will create an app.
```

## Building an extension

```bash
# Let's build our first function extension 🤩

➜ npm run generate extension

> generate
> shopify app generate extension

# Need to login if not logged in already
To run this command, log in to Shopify.
User verification code: XXX-QZDX
👉 Press any key to open the login page on your browser
Opened link to start the auth process: https://accounts.shopify.com/activate-with-code?device_code%5Buser_code%5D=RLZH-QZDX

✔ Logged in.
?  Which organization is this work for?
✔  Marmeto L&D

Before proceeding, your project needs to be associated with an app.

?  Create this project as a new app on Shopify?
✔  Yes, create it as a new app

?  App name:
<<<<<<< HEAD
=======
>  demo-lnd█
   ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
✔  demo-lnd

╭─ info ───────────────────────────────────────────────────────────────────────╮
│                                                                              │
│  Using shopify.app.toml for default values:                                  │
│                                                                              │
│    • Org:             Marmeto L&D                                            │
│    • App:             demo-lnd                                               │
│                                                                              │
│   You can pass  `--reset`  to your command to reset your app configuration.  │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯

## Building an extension

```bash
# Let's build our first function extension 🤩

➜ npm run generate extension

> generate
> shopify app generate extension

# Need to login if not logged in already
To run this command, log in to Shopify.
User verification code: XXX-QZDX
👉 Press any key to open the login page on your browser
Opened link to start the auth process: https://accounts.shopify.com/activate-with-code?device_code%5Buser_code%5D=RLZH-QZDX

✔ Logged in.
?  Which organization is this work for?
✔  Marmeto L&D

Before proceeding, your project needs to be associated with an app.

?  Create this project as a new app on Shopify?
✔  Yes, create it as a new app

?  App name:
>>>>>>> 16d156ad5e8af37e56968bfaaf2b8f6046c019ec
>  function-volume-discount
   ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
✔  function-volume-discount

╭─ info ───────────────────────────────────────────────────────────────────────╮
│                                                                              │
<<<<<<< HEAD
│  Using shopify.app.toml for default values:                                  │
│                                                                              │
│    • Org:             Marmeto                                                │
│    • App:             function-volume-dicount                                │
│    • Dev store:       arshiyas-development-store.myshopify.com               │
│    • Update URLs:     Not yet configured                                     │
│                                                                              │
│   You can pass  `--reset`  to your command to reset your app configuration.  │
=======
│  Using shopify.app.toml for default values:                                  |                                 
│                                                                              |                                 
│    • Org:             Marmeto                                                |                                 
│    • App:             function-volume-dicount                                |                                 
│    • Dev store:       arshiyas-development-store.myshopify.com               |                                 
│    • Update URLs:     Not yet configured                                     |                                 
│                                                                              |                                 
│   You can pass  `--reset`  to your command to reset your app configuration.  |
>>>>>>> 16d156ad5e8af37e56968bfaaf2b8f6046c019ec
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯

?  Type of extension?   Type to search...

   Admin                                                                                                                  
      Admin action                                                                                                        
      Admin block                                                                                                         
      Admin print action                                                                                                  
      Customer segment template                                                                                           
      Editor extension collection                                                                                         
      Product configuration                                                                                               
      Subscription UI                                                                                                     
      Validation Settings - UI Extension                                                                                  
                                                                                                                          
   Analytics                                                                                                              
      Web pixel                                                                                                           
                                                                                                                          
   Automations                                                                                                            
      Flow action                                                                                                         
      Flow template                                                                                                       
      Flow trigger                                                                                                        
                                                                                                                          
   Customer account                                                                                                       
      Customer account UI (preview for dev stores only)                                                                   
                                                                                                                          
    Discounts and checkout                                                                                                 
      Checkout UI                                                                                                         
      Post-purchase UI                                                                                                    
      **Cart and checkout validation - Function                                                                             
      Cart transformer - Function                                                                                         
      Delivery customization - Function                                                                                   
      Discount orders - Function                                                                                 
   >  Discount products - Function                                                                                         
      Discount shipping - Function                                                                                        
      Discounts allocator — Function                                                                                      
      Fulfillment constraints - Function                                                                                  
      Local pickup delivery option generators — Function                                                                  
      Payment customization - Function                                                                                    
      Pickup point delivery option generators — Function**                                                                  
                                                                                                                          
   Online store                                                                                                           
      Theme app extension                                                                            

<<<<<<< HEAD
   Press ↑↓ arrows to select, enter to confirm.                                                                    
=======
   Press ↑↓ arrows to select, enter to confirm.
   
   # Select Discount **Discount orders - Function and hit enter**
```                                                                           
      Discount products - Function                                                                                        
      Discount shipping - Function                                                                                        
      Discounts allocator — Function                                                                                      
      Fulfillment constraints - Function                                                                                  
      Local pickup delivery option generators — Function                                                                  
      Payment customization - Function                                                                                    
      Pickup point delivery option generators — Function**                                                                  
                                                                                                                          
   Online store                                                                                                           
      Theme app extension                                                                            

   Press ↑↓ arrows to select, enter to confirm.
>>>>>>> 16d156ad5e8af37e56968bfaaf2b8f6046c019ec
   
   # Select Discount **Discount products - Function and hit enter**
```

## Extension Only template

```bash
➜ npm init @shopify/app@latest  

> npx
> create-app

Welcome. Let’s get started by naming your app project. You can change it later.

?  Your project name?
✔  Only-ext

?  Get started building your app:
✔  Build an extension-only app

╭─ info ───────────────────────────────────────────────────────────────────────╮
│                                                                              │
│  Initializing project with `npm`                                             │
│  Use the `--package-manager` flag to select a different package manager.     │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯

╭─ success ────────────────────────────────────────────────────────────────────╮
│                                                                              │
│  only-ext is ready for you to build!                                         │
│                                                                              │
│  Next steps                                                                  │
│    • Run `cd only-ext`                                                       │
│    • For extensions, run `npm run shopify app generate extension`            │
│    • To see your app, run `npm run shopify app dev`                          │
│                                                                              │
│  Reference                                                                   │
│    • Shopify docs                                                            │
│    • For an overview of commands, run `npm run shopify app -- --help`        │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯

# Now, follow the steps to craete extension: **👉 [Click here](https://www.notion.so/Creating-Your-First-Function-1043d3670a66804a85b8d050d1b80cc3?pvs=21)** 
```
