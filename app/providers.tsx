'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { ReactNode } from 'react'
import '@rainbow-me/rainbowkit/styles.css'
import {
  RainbowKitProvider,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit'

const config = getDefaultConfig({
  appName: 'My Web3 App',
  projectId: '315de83d849667c5a4a33c364c7dea46',
  chains: [mainnet],
  ssr: true,
})

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
} 