import {FaPizzaSlice} from 'react-icons/fa';
export const Header = () => {
    return (
      <header className="header" data-testid="header">
          <nav>
              <div className="logo">
                  <img src = "/images/logo.png" alt="TodoList"/>
              </div>
              <div className="settings">
                  <ul>
                      <li>
                        +
                      </li>
                    <li><FaPizzaSlice></FaPizzaSlice></li>
                  </ul>
              </div>
          </nav>
      </header>  
    )
}