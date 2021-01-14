import React, {Component} from 'react';

class Profil extends Component {

    render() {
        let Infos = this.props.children ? (`Description : ${this.props.children}`) : ('Pas de Description Disponible');
        return (
            <div className="profil">
                <h1 className="first">Prénom : {this.props.first}</h1>
                <h2 className="family">Nom : {this.props.family}</h2>
                <p className="description">{Infos}</p>
            </div>
        );
    };

};

export default Profil;