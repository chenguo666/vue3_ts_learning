import { App } from 'vue';
import { formatUtcString } from '@/utils/data-format';
export default function registgerProperties(app: App) {
  app.config.globalProperties.$filter = {
    formatTime(value: string) {
      return formatUtcString(value);
    }
  };
}
