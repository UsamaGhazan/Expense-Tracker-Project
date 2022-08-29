
import "./App.css";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { Incomeexpenses } from "./components/incomeexpenses";
import {TransactionList} from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import {GlobalProvider} from "./components/context/Globalstate"

function App(){
    return(
    <GlobalProvider>
        <Header/>
        <div className="container">
            <Balance/>
            <Incomeexpenses/>
            <TransactionList/>
            <AddTransaction/>
        </div>
    </GlobalProvider>

    )


}
export default App;