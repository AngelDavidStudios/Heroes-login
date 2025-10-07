import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount } from 'vue'
import { getCurrentUser } from 'aws-amplify/auth'

type UseAuthGuardOptions = {
  redirectName?: string
}

export const isAuthGuard = (opts: UseAuthGuardOptions) => {
  const router = useRouter()
  const route = useRoute()
  const { redirectName = 'LandingAuth'} = opts

  onBeforeMount( async () => {
    try {
      await getCurrentUser()
    }
    catch {
      await router.replace({
        name: redirectName,
        query: { redirect: route.fullPath }
      })
    }
  })
}
