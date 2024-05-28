import { useEffect, useState } from "react";
import TabsComponent from "../../../components/tab";
import { MainData } from "../../../data";
import { Box, Container, Stack, Typography } from "@mui/material";
import { IDataType } from "../../../types/dataType";

export default function SelectView() {
  const [datas, setDatas] = useState<IDataType[]>(MainData); // Corrected state type
  const [price, setPrice] = useState<number>(0);

  const handleTabSelectChange = (
    _id: string,
    tabId: number,
    checked: boolean
  ) => {
    const updatedData = datas.map((data) => {
      if (data._id === _id) {
        if (!data.multeSelect)
          data.tabs.map((tab) => {
            tab.isSelect = false;
          });
        data.tabs[tabId].isSelect = checked;
        data.isSelect = data.tabs.some((tab) => tab.isSelect === true);
      }
      return data;
    });

    setDatas(updatedData);
  };

  const handleTabSelectDefault = (_id: string) => {
    const updatedData = datas.map((data) => {
      if (data._id === _id) {
        if (data.isSelect) {
          data.tabs.map((tab) => {
            tab.isSelect = false;
          });
        } else if (!data.isSelect) {
          {
            data.tabs[0].isSelect = true;
          }
        }
        data.isSelect = !data.isSelect;
      }
      return data;
    });

    setDatas(updatedData);
  };

  useEffect(() => {
    const totalPrice = datas
      .map((data) =>
        data.tabs
          .filter((tab) => tab.isSelect)
          .reduce((sum, tab) => sum + tab.price, 0)
      )
      .reduce((sum, tab) => sum + tab, 0);
    console.log(totalPrice);
    setPrice(totalPrice);
  }, [datas]);
  return (
    <Container maxWidth="xl" sx={{ mb: "100px" }}>
      <Typography
        variant="h4"
        pl={3}
        pt={5}
        sx={{ mb: 5, fontWeight: 700, fontSize: 45 }}
        color={"white"}
      >
        Sayt yaratish kalkulatsiyasi
      </Typography>

      <Stack spacing={3}>
        {datas.map((data) => (
          <TabsComponent
            key={data._id}
            data={{ ...data, isSelect: data.isSelect || false }}
            onTabSelectChange={(tabId, checked) =>
              handleTabSelectChange(data._id, tabId, checked)
            }
            onTabSelectDefalut={() => handleTabSelectDefault(data._id)}
          />
        ))}
      </Stack>

      <Typography
        variant="h4"
        pl={3}
        pt={5}
        sx={{ mb: 5, fontWeight: 700, fontSize: 45 }}
        color={"white"}
      >
        Sizning veb-saytingizning yaratishning taxminiy narxi:
        <Box
          component="span"
          px={4}
          py={1}
          borderRadius={2}
          bgcolor={"rgb(0,122,204)"}
          ml={3}
        >
          {price}$
        </Box>
      </Typography>
    </Container>
  );
}
