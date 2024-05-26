import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import Main from "./common/main";
// import Header from "./header";
// import { Box } from "@mui/material";
// import Nav from "./nav";
// import Main from "./main";

interface IProps {
  children: ReactNode;
}

const DashboardLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Main>{children}</Main>
      </Box>
    </>
  );
};

export default DashboardLayout;
