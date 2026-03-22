# Déploiement iaco.app

Ce projet contient un script de déploiement automatisé pour l'application Next.js multi-produits iaco.app.

## Architecture

L'application supporte plusieurs sous-domaines :
- `problemsolver.iaco.app` - Landing page ProblemFinder
- `formation.iaco.app` - Landing page Formation (à implémenter)

## Script de déploiement

Le script `script/deploy.sh` automatise le processus de build et packaging :

```bash
./script/deploy.sh
```

### Ce que fait le script :

1. **Build Next.js** avec `pnpm build`
2. **Préparation** du dossier `deploy/`
3. **Copie du standalone** Next.js (mode autonome)
4. **Aplatissement des dépendances** pnpm
5. **Copie des assets statiques** (`.next/static`)
6. **Copie du dossier public** (images, etc.)
7. **Copie optionnelle** de `.env.prod` vers `.env`
8. **Compression** en `deploy-iaco-app.tgz`

## Déploiement sur le serveur

### 1. Prérequis serveur

- Node.js installé
- PM2 ou autre process manager
- Nginx/Apache pour reverse proxy
- Certificats SSL (Let's Encrypt recommandé)

### 2. Configuration DNS

Configurer les sous-domaines :
```
problemsolver.iaco.app -> IP_SERVEUR
formation.iaco.app -> IP_SERVEUR
*.iaco.app -> IP_SERVEUR (wildcard pour l'avenir)
```

### 3. Déploiement

```bash
# Sur le serveur
mkdir -p /var/www/iaco-app
cd /var/www/iaco-app

# Transférer le package
# (scp, rsync, ou autre méthode)

# Extraire
tar -xzvf deploy-iaco-app.tgz

# Installer les dépendances si nécessaire
npm install --production

# Lancer avec PM2
pm2 start server.js --name iaco-app
pm2 save
pm2 startup
```

### 4. Configuration Nginx

Exemple de configuration pour les sous-domaines :

```nginx
server {
    listen 80;
    server_name problemsolver.iaco.app;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}

server {
    listen 80;
    server_name formation.iaco.app;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### 5. SSL avec Let's Encrypt

```bash
certbot --nginx -d problemsolver.iaco.app -d formation.iaco.app
```

## Variables d'environnement

Créer un fichier `.env.prod` à la racine du projet avec :

```
# Variables de production
NODE_ENV=production
# Autres variables nécessaires
```

## Développement local

```bash
pnpm install
pnpm dev
```

L'application sera accessible sur `http://localhost:3001`

## Testing des sous-domaines en local

Pour tester les sous-domaines localement, ajouter au fichier `/etc/hosts` :

```
127.0.0.1 problemsolver.iaco.app
127.0.0.1 formation.iaco.app
```

Puis accéder aux URLs dans le navigateur.

## Structure du projet

```
app/
├── page.tsx                    # Page admin (/ - liens vers les landings)
├── problemsolver/
│   ├── page.tsx               # Landing ProblemFinder
│   ├── inscription/page.tsx   # Formulaire d'inscription
│   └── bienvenue/page.tsx     # Page de bienvenue
└── formation/
    ├── page.tsx               # Landing Formation (placeholder)
    ├── inscription/page.tsx   # Formulaire d'inscription
    └── bienvenue/page.tsx     # Page de bienvenue

script/
└── deploy.sh                  # Script de déploiement
```</content>
<parameter name="filePath">/home/eloise/landing/DEPLOYMENT.md