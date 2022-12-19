import { myLoader } from "@utils/all";
import Image from "next/image";
import Link from 'next/link';

function PropTable({table}){
    return(
      <div className="flex-none border border-gray-400 min-w-full px-4 overflow-auto hide-scroll-bar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="sticky z-5 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0">
              <div className="py-2 pr-2 border-b border-slate-200">Props</div>
              </th>
              <th className="sticky z-5 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0">
              <div className="py-2 pl-2 border-b border-slate-200">Properties</div>
              </th>
            </tr>
          </thead>
          <tbody className="align-baseline">
          {table.map((item, index) => (
            <tr className="border-b border-slate-200">
              <td translate="no" className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap">{item.prop}</td>
              <td translate="no" className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre">{item.properties}</td>
            </tr>
          ))}
          </tbody>
        </table>
        <div className="sticky bottom-0 h-px -mt-px bg-slate-200"></div>
      </div>
    )
}

export default PropTable
