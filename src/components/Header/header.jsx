import React from 'react';
import './header.css';
import { BiUserPin } from 'react-icons/bi';
import { BsFillBookFill } from 'react-icons/bs';
import { GoProject } from 'react-icons/go'

export default function Header(){

    return(
        <header>
            <div className="headerLinks">
                <div>
                    <BiUserPin className='header-icon'/>
                    <a href="#">Sobre Mim</a>
                </div>
                <div>
                    <BsFillBookFill className='header-icon'/>
                    <a href="#">Conhecimentos</a>
                    </div>
                <div>
                    <GoProject className='header-icon'/>
                    <a href="#">Projetos</a>
                    </div>
            </div>
        </header>
    )
}