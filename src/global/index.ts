import { App } from 'vue';
import registerElement from './register-element';
import registerPropserites from './register-propserites';

export function globalRegister(app: App): void {
  app.use(registerElement);
  app.use(registerPropserites);
}
