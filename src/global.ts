import { Howl } from 'howler';
import SoundHelper from '~helpers/sound';

export class GameTemplate {
  static isCordovaApp: boolean;

  static audiosprite: Howl;

  static Sound: SoundHelper;

  static globalscore: unknown;

  static record: number;

  static volume: number;
}
