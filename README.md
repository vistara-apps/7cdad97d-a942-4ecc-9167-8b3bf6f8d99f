# ArchiVault - Onchain Artifact Preservation

A Base Mini App for museums and archives to systematically track environmental conditions and artifact degradation using structured data and comparison tools.

## Features

- **Decentralized Condition Reporting**: Create immutable, verifiable condition reports for artifacts
- **Collaborative Preservation**: Secure communication and collaboration among curators and conservators
- **Onchain Alert System**: Automatic notifications for environmental deviations
- **Preservation Badges**: Recognition for institutional excellence in artifact preservation

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- MiniKit for Farcaster integration
- TypeScript
- Tailwind CSS (Coinbase theme)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Base Mini App Configuration

The app is configured as a Base Mini App with:
- Farcaster manifest at `/.well-known/farcaster.json`
- OnchainKit integration for wallet and transactions
- MiniKit integration for Farcaster features
- Gasless transactions via Coinbase Paymaster

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## License

MIT
