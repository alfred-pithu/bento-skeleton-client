# Bento Skeleton Client

## Features
- Restaurant Registration
- Employee login and check-in check-out
- Navigation panel for navigating to other services
- Control panel for discount setting, availability in Bento Marketplace control, and menu item availability control in POS and Marketplace
- Analytics and Information panels for Orders of POS and Marketplace, Employee performance, Inventory status, Vendor orders and Menu for different timespans


## Deployed Link
``` https://getbento.vercel.app ```

## Getting Started

### Prerequisites

- Node.js (version >= 10)
- npm 
- Angular CLI 

### Installation
1. Clone the repository or download the source code: ```  git clone https://github.com/alfred-pithu/bento-skeleton-client.git ```

2. Navigate into the project directory:  ``` cd bento-skeleton-client ```

3. Install dependencies using npm: ``` npm install ```

4. Start the server: ``` ng serve ```




## Folder Structure

```
└── 📁src
    └── 📁app
    |    └── 📁Interfaces
    |    └── app-routing.module.ts
    |    └── app.component.css
    |    └── app.component.html
    |    └── app.component.spec.ts
    |    └── app.component.ts
    |    └── app.module.ts
    |    └── 📁components
    |    |    └── 📁control-panel
    |    |    |    └── 📁control-menu-item-visibility
    |    |    |    └── 📁restaurant-visibility-in-marketplace
    |    |    |    └── 📁set-discount
    |    |    ├──  📁get-started-btn
    |    |    ├──  📁hr
    |    |    |    └── 📁all-employees
    |    |    |    └── 📁orders-served-ranking
    |    |    ├──  📁inventory
    |    |    |    └── 📁current-inventory
    |    |    |    └── 📁current-vendor-orders
    |    |    |    └── 📁most-used-ingred
    |    |    |    └── 📁most-wasted-ingred
    |    |    ├──  📁menu
    |    |    |    └── 📁full-menu
    |    |    |    └── 📁most-profitable-item
    |    |    |    └── 📁most-sold-item
    |    |    ├──  📁navbar
    |    |    ├──  📁orders
    |    |    |     └── 📁marketplace-all-orders
    |    |    |     └── 📁pos-all-orders
    |    |    └── 📁service-card
    |    |    └── 📁splash-logo
    |    ├──  📁guards
    |    |    └── 📁auth
    |    |    └── 📁no-auth
    |    |    └── 📁owner
    |    ├── 📁interceptors
    |    |    └── 📁auth-interceptor
    |    |    └── 📁error-interceptor
    |    |    └── 📁token-interceptor
    |    ├── 📁pages
    |    |    └── 📁accessible-silos
    |    |    └── 📁control-panel-container
    |    |    └── 📁dashboard-page
    |    |    └── 📁homepage
    |    |    └── 📁hr-container
    |    |    └── 📁inventory-container
    |    |    └── 📁login
    |    |    └── 📁logout-page
    |    |    └── 📁map
    |    |    └── 📁menu-container
    |    |    └── 📁orders-container
    |    |    └── 📁page-container
    |    |    └── 📁redirect-page
    |    |    └── 📁signup
    |    ├── 📁services
    |    |    └── 📁cloudinary
    |    |    └── 📁hr
    |    |    └── 📁inventory
    |    |    └── 📁menu-builder
    |    |    └── 📁pos-marketplace-orders
    |    |    └── 📁restaurant-info
    |    |    └── 📁signup
    |    |    └── 📁skeleton-api
    |    |    └── 📁toast-message
    |    ├── 📁utils
    ├── 📁assets
    |    ├──  .gitkeep
    |    ├──  favicon.png
    |    ├──  📁fonts
    |    ├──  📁photos and logos
    ├── 📁environments
    ├── index.html
    ├── main.ts
    ├── styles.css
    └── theme.less

```
