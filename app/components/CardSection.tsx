import { ArrowRight, ClipboardList } from "lucide-react"
import CardList from "./CardList"


const CardSection = () => {
  return (
  <div id="courses" className=" mt-[11rem] px-10 md:px-20 mb-96">
      <h2 className="font-bold text-[30px] my-10">
        All Tasks
      </h2>
      <CardList />
    </div>
  )
}

export default CardSection