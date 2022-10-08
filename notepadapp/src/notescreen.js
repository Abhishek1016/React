import './notescreen.css'
import './notelogo.jfif'
import Personallevel from './personallevel'
import Officelevel from './officelevel'
import Everyday from './Everydayreminder'
function Notescreen()
{
    return(
        <div className="notescreen">
           <div className='notescreen_top'>
            <div className='line1'><h1 className='mainhead'>Welcome to Notepad App</h1><img src='notelogo.jfif' alt='loading' className='notelogo'/></div>
            <div>
                <p className='subhead'>You can store your Personal , Office and Everyday reminders seperately here </p>
            </div>
           </div>
           {/* Nextlevel in notescreen personal */}
           <div className='notescreen_personallevel'>
            <Personallevel/>
            <Officelevel/>
            <Everyday/>
           </div>
        </div>

    )
}
export default Notescreen;