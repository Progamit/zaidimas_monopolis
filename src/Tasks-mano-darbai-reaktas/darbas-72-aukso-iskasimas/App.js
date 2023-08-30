import './App.css';
import {useState} from "react";
import Toolbar from "./ToolBar.js";
import ProgressBar from "./ProgressBar.js";
import Inventory from "./Inventory.js";
import GoldPrice from "./GoldPrice.js";
import DigButton from "./DigButton.js";





/// energy restore speed upgrade
/// energy total upgrade
///

function App() {

    const [money, setMoney] = useState(100)
    const [energy, setEnergy] = useState(100)
    const [goldPrice, setGoldPrice] = useState(10)
    const [maxGoldDigChance, setMaxGoldDigChance] = useState(1)
    const [inventory, setInventory] = useState([])
    const [inventorySlots, setInventorySlots] = useState(3)
    const [goldChangeUpgradeLevel, setGoldChangeUpgradeLevel] = useState(1)

    const rnd = (num) => Math.random() * num

    function dig() {

        if(energy <= 0) return
        if(inventory.length + 1 > inventorySlots) return
        const goldDug = Number(rnd(maxGoldDigChance).toFixed(2))
        setInventory([...inventory, goldDug])

        const costEnergy = rnd(10)+1

        if(energy-costEnergy < 0) return setEnergy(0)
        setEnergy(energy-costEnergy)
    }

    function sellGold() {
        if(inventory.length === 0) return
        let myGold = 0
        inventory.map(x => myGold += x)
        setMoney(money + Number((myGold * goldPrice) .toFixed(2) ) )
        setInventory([])
        setGoldPrice(rnd(20)+10)
    }

    function buyUpgrade(upgrade) {
        if(upgrade === 1) {
            if(money >= goldChangeUpgradeLevel * 50) {
                setMoney(money - goldChangeUpgradeLevel * 50)
                setGoldChangeUpgradeLevel(goldChangeUpgradeLevel + 1)
                setMaxGoldDigChance(maxGoldDigChance + 0.3)
            }
        }
        if(upgrade === 2) {
            if(money >= 50) {
                setMoney(money - 50)
                setEnergy(energy+20)
            }
        }
        if(upgrade === 3) {
            if(money >= 100) {
                setMoney(money - 100)
                setInventorySlots(inventorySlots+1)
            }
        }
    }

    return (
        <div className="p50">
            <Toolbar buy={buyUpgrade} lvl={goldChangeUpgradeLevel}/>
            <div className="d-flex gap10">
                <div className="grow1">
                    <Inventory slots={inventorySlots} inventory={inventory} sell={sellGold}/>
                </div>
                <div className="grow1 d-flex flex-column space-btw">
                    <GoldPrice price={goldPrice.toFixed(2)}/>

                    <div className="d-flex grow1 j-center a-center">
                        <h1 className="money">Money: {money.toFixed(2)} $</h1>
                    </div>

                    <ProgressBar energy={energy}/>
                    <DigButton dig={dig}/>
                </div>
            </div>
        </div>
    );
}

export default App;