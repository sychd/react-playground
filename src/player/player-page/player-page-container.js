import "./player-page.scss";
import { connect } from 'react-redux';
import { PlayerPage } from './player-page';
import { GP_PLAYER_ACTIONS } from '../+store/player-actions';

const actions = GP_PLAYER_ACTIONS;

const mapStateToProps = state => {
  return state.player;
}

const mapDispatchToProps = dispatch => {
  
  return {
    onVolumeInput: event => {
      dispatch({ type: actions.VOLUME_CHANGE, payload: +event.target.value })
    }
  }
}

export const PlayerPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerPage);

