import st from '../css/options.module.css';
import React from 'react'
import StartButton from './Button';
import Game from "./Game";



const OptionsScreen = (props) => {
    
    return (
        <div className={st.main}>
            <div className={st.logoText}>OPTIONS</div>
            <div className={st.optionsSection}>
                <div className={st.lefSection}>
                    <div className=''>
                        <label htmlFor="sizing">Volume Level</label>
                        <input id="sizing" type="range" name="sizing" min="1" max="100"  onChange={(e) => console.log(e.target.value, 'checked')}></input>
                    </div>
                    <div className=''>
                        <label className="switch">music Off</label>
                        <input id="checkbox" type="checkbox" onChange={() => console.log('checked')}></input>

                    </div>
                    <div className=''>
                        <label htmlFor="sizing">Sound Level</label>
                        <input id="sizing" type="range" name="sizing" min="1" max="100"></input>
                    </div>
                    <div className=''>
                        <label className="switch">sound Off</label>
                        <input id="checkbox" type="checkbox"></input>
                    </div>
                    <div className=''>
                        <label className="select">difficulty</label>
                        <select>
                            <option value="16cards">4x4</option>
                            <option value="20cards">5x4</option>
                            <option value="24cards">6x4</option>
                        </select>

                    </div>
                </div>

            
                <div className={st.rightSection}>
                    <div className=''>card back</div>
                    <div className=''>card image</div>
                </div>
                {props.children}
               
            </div>

        </div>
    )
}

export default OptionsScreen;