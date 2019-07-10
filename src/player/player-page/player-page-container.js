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
    onVolumeInput: value => dispatch({ type: actions.VOLUME_CHANGE, payload: value })
  };
};

export const PlayerPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerPage);

