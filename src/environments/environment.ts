/*
 * @author HO
 * This default configuration is NEVER used
 * When serving|building the app, envorinment file
 * is ALWAYS replaced for one of the other available configs
 *
 * This file is kept since is necessary for Angular to bootstrap
 */
import { Environment } from 'src/app/models';

export const environment: Environment = {
  bonusSteps: false,
  title: '',
};
