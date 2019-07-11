import "./player-page.scss";
import { connect } from 'react-redux';
import { PlayerPage } from './player-page';
import { GP_PLAYER_ACTIONS } from '../+store/player-actions';

const actions = GP_PLAYER_ACTIONS;

const mapStateToProps = state => {
  return state.player;
};

const mapDispatchToProps = dispatch => {
  return {
      onVolumeChange: value => dispatch({ type: actions.REQUEST_VOLUME_CHANGE, payload: value }),
      onPreviousClick: () => dispatch({ type: actions.TRIGGER_PREVIOUS }),
      onNextClick: () => dispatch({ type: actions.TRIGGER_NEXT }),
      onPlayPauseClick: () => dispatch({ type: actions.SWITCH_PLAY_STATE }),
      initializePlayerModule: () => dispatch({ type: actions.INITIALIZE_MODULE })
  };
};

export const PlayerPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerPage);

