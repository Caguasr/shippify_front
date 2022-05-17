import {AppBar, Button, Toolbar, Typography} from "@mui/material";


const AppBarWelcome = ({setOpen}:any) => {
  return(
      <AppBar elevation={0} className="border-b border-cyan-500">
          <Toolbar className={"flex justify-between bg-[#0d0535] "}>
              <Typography variant="h6" fontWeight="bold" className="underline cursor-pointer text-white ">
                  CRUD VEHICLES
              </Typography>
              <Button variant={"outlined"} color={"primary"} onClick={() => setOpen(true)}>
                  Add vehicles
              </Button>
          </Toolbar>
      </AppBar>
  )
}

export  default AppBarWelcome;