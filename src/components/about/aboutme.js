import React from 'react'

class Aboutme extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="row">
                            <div className="col-xs-6 col-xs-offset-3">
                                <span><i className="fa fa-code-fork fa-2x" aria-hidden="true" /></span>
                            </div>
                        </div>
                        <div className="row hidden-xs hidden-sm">
                            <div className="col-md-3 col-md-offset-3 col-sm-6 col-xs-6">
                                <div>
                                    <strong>Jag heter Viktor Ölund och jobbar som webbutvecklare i AngularJS på Norrlands Universitetssjukhus</strong>
                                </div>
                                <div className="field-margin">
                                    <strong>Är 26 år och bor med min sambo på Öbacka Strand. På fritiden spenderar jag min tid på styrketräning, vänner och idrottsintressen.</strong>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <img src={require("../../images/viktorolund.jpg")} className="img-size-md img-circle img-responsive" alt="viktor olund" />
                            </div>
                        </div>
                        <div className="hidden-lg hidden-md">
                            <div className="row">
                                <div className="col-xs-6 col-xs-offset-3">
                                    <img src={require("../../images/viktorolund.jpg")} className="img-size-md img-circle img-responsive" alt="viktor olund" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-6 col-xs-offset-3">
                                    <div>
                                        <strong>Jag heter Viktor Ölund och jobbar som webbutvecklare i AngularJS på Norrlands Universitetssjukhus</strong>
                                    </div>
                                    <div>
                                        <strong>Är 26 år och bor med min sambo på Öbacka Strand. På fritiden spenderar jag min tid på styrketräning, vänner och idrottsintressen.</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme
