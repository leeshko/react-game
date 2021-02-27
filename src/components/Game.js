import logo from '../images/logo.png';
import StartButton from './Button';
import s from '../css/game.module.css';
import React from 'react';
import changeScreenToOptions from "./Options";
import st from '../css/options.module.css';



// export default function Game() {


//     return (
//         <div className={s.main}>
//             <div className={s.logo}>
//             <img className={s.logoimg} src={logo} alt="Logo"></img>
//                 <span className={s.logoName}>Memory Game</span>
//                 <div className={s.buttons}>
//             {/* <StartButton name='DEMO' /> */}
//             <StartButton link={<changeScreenToOptions />} name='START'/>

//                 </div>
//             </div>

//         </div>
//     )
// }


export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            screen: 1
        };
    }


    handleClick() {
       this.setState({screen: 2});
    }


    render() {
        const screenNum = this.state.screen;

        if (screenNum === 1) {
            return (
                <div className={st.main}>
                    <div className={st.logoText}>OPTIONS</div>
                    <div className={st.optionsSection}>
                        <div className={st.lefSection}>
                            <div className=''>
                                <label for="sizing">Volume Level</label>
                                <input id="sizing" type="range" name="sizing" min="1" max="100" value="1"></input>
                            </div>
                            <div className=''>
                                <label class="switch">music Off</label>
                                <input id="checkbox" type="checkbox"></input>

                            </div>
                            <div className=''>
                                <label for="sizing">Sound Level</label>
                                <input id="sizing" type="range" name="sizing" min="1" max="100" value="1"></input>
                            </div>
                            <div className=''>
                                <label class="switch">sound Off</label>
                                <input id="checkbox" type="checkbox"></input>
                            </div>
                            <div className=''>
                                <label class="select">difficulty</label>
                                <select>
                                    <option selected value="16cards">4x4</option>
                                    <option value="20cards">5x4</option>
                                    <option value="24cards">6x4</option>
                                </select>

                            </div>
                        </div>


                        <div className={st.rightSection}>
                            <div className=''>card back</div>
                            <div className=''>card image</div>
                        </div>
                        <StartButton link={<Game />} name='START' />
                    </div>

                </div>
            )
           
        } else if (screenNum === 2) {
            return (

                <div className={s.main}>
                    <div className={s.logo}>
                        <img className={s.logoimg} src={logo} alt="Logo"></img>
                        <span className={s.logoName}>Memory Game</span>
                        <div className={s.buttons}>
                            {/* <StartButton name='DEMO' /> */}
                            <StartButton onClick={this.handleClick} name='START' />

                        </div>
                    </div>

                </div>
            )
            
        }
    }

}
