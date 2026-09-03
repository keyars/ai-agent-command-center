import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './main'

describe('AI Agent Command Center', () => {
  it('renders the command center shell', () => {
    render(<App />)
    expect(screen.getByText('Agent command center')).toBeTruthy()
    expect(screen.getByRole('button', { name: /Run workflow/i })).toBeTruthy()
    expect(screen.getByText('Research Brief')).toBeTruthy()
  })
})
