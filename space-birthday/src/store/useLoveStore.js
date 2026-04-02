import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useLoveStore = create()(
  persist(
    (set, get) => ({
      hearts: 0,
      secretUnlocked: false,
      isMuted: false,

      collectHeart: () => {
        const current = get().hearts
        if (current >= 5) return;        // ← This prevents going above 5
        
        const newHearts = current + 1;
        set({
          hearts: newHearts,
          secretUnlocked: newHearts >= 5
        });
      },

      toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
      resetProgress: () => set({ hearts: 0, secretUnlocked: false })
    }),
    {
      name: 'love-surprise-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)