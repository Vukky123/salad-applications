import React, { Component } from 'react'

// Styles
import { styles } from './Offerwall.styles'

// UI
import { CondensedHeader, Divider } from '../../../../components'
import { ToggleSetting } from '../../components'

// Packages
import withStyles, { WithStyles } from 'react-jss'
import classnames from 'classnames'

interface Props extends WithStyles<typeof styles> {
  offerwall?: boolean
  offerwallToggle?: () => void
  playerId?: string
}

class _Offerwall extends Component<Props> {
  render() {
    const { offerwall, offerwallToggle, playerId, classes } = this.props

    const offerwallDescription = (
      <>
        Hey Chefs! Here you can opt-in for additional ways to earn Salad Balance that don't involve mining, feel free to utilize them or keep chopping as you see fit.
        <br /><br />
        Please Note: This service is run by a third-party site and you should practice absolute security and awareness while using it. Salad does not condone the collection of private information, so if you encounter anything suspicious, please let us know immediately.
      </>
    )

    return (
      <>
        <div className="header">
          <CondensedHeader>Offerwall</CondensedHeader>
        </div>
        <Divider />

        <ToggleSetting
          title={'Offerwall'}
          description={offerwallDescription}
          toggled={offerwall}
          onToggle={offerwallToggle}
        />

        {offerwall && (
          <div className={classnames(classes.offerwallWrapper)}>
            <iframe
              src={`https://api.adgem.com/v1/wall?appid=1735&playerid=${playerId}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                margin: 0,
                padding: 0,
                overflow: 'hidden',
                zIndex: 999999,
              }}
              title={`offerwall-${playerId}`}
              sandbox="allow-scripts allow-popups allow-forms allow-same-origin"
            >
              Your browser doesn't support iframes
            </iframe>
          </div>
        )}
      </>
    )
  }
}

export const Offerwall = withStyles(styles)(_Offerwall)