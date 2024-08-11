import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
    BarChartBig,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import Link from "next/link";
  
  export function NavMenu() {
    return (
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>

          
          <DropdownMenuItem>
            <Link href = "/dashboard" className="flex flex-row">
                  <BarChartBig className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          


            <DropdownMenuItem>
            <Link href = "/quizz/new" className="flex flex-row">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>New Quizz</span>
            </Link>
            </DropdownMenuItem>
            

            <DropdownMenuItem>
            <Link href = "/billing" className="flex flex-row">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </Link>
            </DropdownMenuItem>



          </DropdownMenuGroup>
        </DropdownMenuContent>
      
    )
  }
  