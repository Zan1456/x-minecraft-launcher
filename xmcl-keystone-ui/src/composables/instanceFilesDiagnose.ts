import { InstanceFile } from '@xmcl/runtime-api'
import { Ref, InjectionKey } from 'vue'

export const kInstanceFilesDiagnose: InjectionKey<ReturnType<typeof useInstanceFilesDiagnose>> = Symbol('InstanceFilesDiagnose')

export function useInstanceFilesDiagnose(instanceFiles: Ref<InstanceFile[]>, install: () => Promise<void>) {
  const { t } = useI18n()

  const issue = computed(() => instanceFiles.value.length > 0
    ? {
      title: t('diagnosis.instanceFiles.title'),
      description: t('diagnosis.instanceFiles.description', { counts: instanceFiles.value.length }),
    }
    : undefined)

  const fix = install

  return {
    issue,
    fix,
  }
}
