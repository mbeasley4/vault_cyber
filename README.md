# Vault Cybersecurity – Drupal 11 Website

Vault Cybersecurity is a fictional cybersecurity company website built on **Drupal 11**, designed to demonstrate modern Drupal architecture, component-based content modeling, and secure deployment practices.

The project showcases best practices for:
- Drupal 11 configuration management
- Paragraph-based page building
- Tailwind CSS theming
- GitHub-based deployments using Composer and Drush

---

## 🛡️ About Vault Cybersecurity

Vault Cybersecurity is built around the idea of **operational resilience** — embedding security into the core of business operations so organizations remain secure, stable, and prepared for evolving threats.

This repository represents a **production-style Drupal implementation**, suitable as:
- A reference project
- A portfolio site
- A foundation for real-world Drupal builds

---

## 🧱 Tech Stack

- **Drupal:** 11.x  
- **PHP:** 8.2+  
- **Composer:** Dependency management  
- **Drush:** Site administration & deployment  
- **Tailwind CSS:** Custom theme styling  
- **Paragraphs:** Component-based page building  
- **GitHub:** Source control & deployments  

---

## 📂 Project Structure

```
├── composer.json
├── composer.lock
├── config/
│   └── sync/
├── web/
│   ├── core/
│   ├── modules/
│   │   └── custom/
│   ├── themes/
│   │   └── custom/
│   │       └── vault_cyber/
│   └── sites/
│       └── default/
│           ├── settings.php
│           └── settings.local.php
└── README.md
```

---

## 🚀 Local Development Setup

### 1. Clone the repository
```bash
git clone git@github.com:your-org/vault-cybersecurity-drupal.git
cd vault-cybersecurity-drupal
```

### 2. Install PHP dependencies
```bash
composer install
```

### 3. Configure settings
Create a local settings file:

```
web/sites/default/settings.local.php
```

Add database and local overrides there.

### 4. Import configuration
```bash
vendor/bin/drush cim -y
```

### 5. Clear caches
```bash
vendor/bin/drush cr
```

---

## 🧩 Content Architecture

Vault Cybersecurity uses **Paragraphs** to build flexible, reusable page sections:

- Homepage Hero
- Interior Hero
- Two Column Layout (configurable ratios)
- Image + Content Blocks
- CTA Sections

Editors can:
- Reorder sections
- Choose layouts (1/2, 1/3–2/3, 1/4–3/4)
- Control image position per section

---

## 🎨 Theming

The custom theme (`vault_cyber`) uses:

- Tailwind CSS
- Twig template overrides
- Mobile-first responsive layouts
- Configurable UI via Drupal fields

Key template locations:
```
themes/custom/vault_cyber/templates/
├── page/
├── paragraph/
├── menu/
└── block/
```

---

## 🔐 Security Practices

- Configuration managed via `config/sync`
- Secrets excluded from version control
- MFA-ready authentication architecture
- Hardened deployment workflow
- No writable code in production

---

## 🚚 Deployment Strategy

This project uses **Option 1 deployment**:

```
Local → GitHub → Server → Composer install → Drush deploy
```

### Typical production deploy:
```bash
git pull origin main
composer install --no-dev --optimize-autoloader
vendor/bin/drush deploy -y
```

---

## 📄 Configuration Management

Export configuration:
```bash
vendor/bin/drush cex -y
```

Import configuration:
```bash
vendor/bin/drush cim -y
```

Never edit configuration directly in production.

---

## ⚠️ Important Notes

- `/web/sites/default/files` is not versioned
- Environment-specific settings live in `settings.local.php`
- Composer updates should be performed locally and committed via `composer.lock`

---

## 📜 License

This project is provided for demonstration and educational purposes.

Drupal is licensed under the **GNU General Public License (GPL-2.0-or-later)**.

---

## 👨‍💻 Maintainer

Vault Cybersecurity  
_Fictional project built to demonstrate modern Drupal 11 best practices._

---

## 🧠 Inspiration

> Preparedness, resilience, and clarity — because in cybersecurity, readiness is survival.
