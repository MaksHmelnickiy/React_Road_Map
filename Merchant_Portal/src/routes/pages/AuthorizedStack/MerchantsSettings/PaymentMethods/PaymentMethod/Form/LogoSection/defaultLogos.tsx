import ReactDomServer from 'react-dom/server';

import { ReactComponent as Alternative } from 'assets/icons/defaultPayementMethods/alternative.svg';
import { ReactComponent as ApplePay } from 'assets/icons/defaultPayementMethods/applePay.svg';
import { ReactComponent as BTC } from 'assets/icons/defaultPayementMethods/btc.svg';
import { ReactComponent as CreditCard } from 'assets/icons/defaultPayementMethods/creditCard.svg';
import { ReactComponent as CryptoCurrency } from 'assets/icons/defaultPayementMethods/cryptoCurrency.svg';
import { ReactComponent as DAI } from 'assets/icons/defaultPayementMethods/dai.svg';
import { ReactComponent as DASH } from 'assets/icons/defaultPayementMethods/dash.svg';
import { ReactComponent as ETH } from 'assets/icons/defaultPayementMethods/eth.svg';
import { ReactComponent as EUR } from 'assets/icons/defaultPayementMethods/eur.svg';
import { ReactComponent as GBP } from 'assets/icons/defaultPayementMethods/gbp.svg';
import { ReactComponent as GooglePay } from 'assets/icons/defaultPayementMethods/googlePay.svg';
import { ReactComponent as LTC } from 'assets/icons/defaultPayementMethods/ltc.svg';
import { ReactComponent as Maestro } from 'assets/icons/defaultPayementMethods/maestro.svg';
import { ReactComponent as Mastercard } from 'assets/icons/defaultPayementMethods/mastercard.svg';
import { ReactComponent as PayPal } from 'assets/icons/defaultPayementMethods/payPal.svg';
import { ReactComponent as TRX } from 'assets/icons/defaultPayementMethods/trx.svg';
import { ReactComponent as USD } from 'assets/icons/defaultPayementMethods/usd.svg';
import { ReactComponent as USDT } from 'assets/icons/defaultPayementMethods/usdt.svg';
import { ReactComponent as Visa } from 'assets/icons/defaultPayementMethods/visa.svg';

export const DEFAULT_ICONS = [
  {
    value: ReactDomServer.renderToString(<USD />),
    component: <USD />,
  },
  {
    value: ReactDomServer.renderToString(<EUR />),
    component: <EUR />,
  },
  {
    value: ReactDomServer.renderToString(<GBP />),
    component: <GBP />,
  },
  {
    value: ReactDomServer.renderToString(<USDT />),
    component: <USDT />,
  },
  {
    value: ReactDomServer.renderToString(<BTC />),
    component: <BTC />,
  },
  {
    value: ReactDomServer.renderToString(<ETH />),
    component: <ETH />,
  },
  {
    value: ReactDomServer.renderToString(<DAI />),
    component: <DAI />,
  },
  {
    value: ReactDomServer.renderToString(<TRX />),
    component: <TRX />,
  },
  {
    value: ReactDomServer.renderToString(<DASH />),
    component: <DASH />,
  },
  {
    value: ReactDomServer.renderToString(<LTC />),
    component: <LTC />,
  },
  {
    value: ReactDomServer.renderToString(<CreditCard />),
    component: <CreditCard />,
  },
  {
    value: ReactDomServer.renderToString(<Alternative />),
    component: <Alternative />,
  },
  {
    value: ReactDomServer.renderToString(<CryptoCurrency />),
    component: <CryptoCurrency />,
  },
  {
    value: ReactDomServer.renderToString(<ApplePay />),
    component: <ApplePay />,
  },
  {
    value: ReactDomServer.renderToString(<GooglePay />),
    component: <GooglePay />,
  },
  {
    value: ReactDomServer.renderToString(<PayPal />),
    component: <PayPal />,
  },
  {
    value: ReactDomServer.renderToString(<Maestro />),
    component: <Maestro />,
  },
  {
    value: ReactDomServer.renderToString(<Mastercard />),
    component: <Mastercard />,
  },
  {
    value: ReactDomServer.renderToString(<Visa />),
    component: <Visa />,
  },
];
