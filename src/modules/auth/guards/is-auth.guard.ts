import { useRouter } from 'vue-router'
import { onBeforeMount } from 'vue'

export const isAuthGuard = (isSignedIn: boolean | undefined) => {
  const router = useRouter()

  onBeforeMount(() => {
    if (!isSignedIn) {
      router.replace({ name: 'LandingAuth' })
    }
  })
}
