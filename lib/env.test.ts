import { describe, expect, it } from 'vitest';
import { env } from './env';

describe('env', () => {
  it('applies defaults', () => {
    expect(env.NEXT_PUBLIC_APP_URL).toBe('http://localhost:3000');
    expect(env.AI_ENABLED).toBe('true');
  });
});
