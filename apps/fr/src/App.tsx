import './App.css'
import { Button } from './components/ui/Buttion'
import { AddIcon } from './components/icons/add'
import { closeIcon } from './components/icons/close'
import { shareIcon } from './components/icons/share'
import { Card } from './components/card'


function App() {

  return (
    <>
    <Button 
    variant={"primary"}
    startIcon={<AddIcon size={"sm"} />}
    size= "ls"
    title = {"Share"} ></Button>

    <Button 
    variant={"secondary"}
    startIcon={<AddIcon  size={"md"} />}
    size= "ss"
    title = {"Share sec "} ></Button>

    <Card />

    
   
    </>
  )
}


export default App
