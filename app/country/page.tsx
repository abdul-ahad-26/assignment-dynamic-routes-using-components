import Link from "next/link";

function World() {
  return <div>
    <ul>
      <li ><Link href="/country/pakistan">pakistan</Link></li>
      <li ><Link href="/country/india">india</Link></li>
      <li ><Link href="/country/china">china</Link></li>
      <li ><Link href="/country/afghanistan">afghanistan</Link></li>
      <li ><Link href="/country/iran">iran</Link></li>
      
    </ul>
  
    
  </div>;
}

export default World;
