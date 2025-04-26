"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  AppBar,
  Toolbar,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

// 將 motion 元素與 MUI 組件結合
const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);
const MotionTypography =motion.create(Typography);

// 創建一個主題
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

// 產品資料
const products = [
  {
    id: 1,
    title: "智能手錶",
    description: "監控您的健康狀況並保持連接。",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "無線耳機",
    description: "享受無線聆聽體驗，隨時隨地。",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "智能家居套件",
    description: "讓您的家變得更聰明，更高效。",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "筆記型電腦",
    description: "強大的性能，滿足您的工作和娛樂需求。",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "智能音箱",
    description: "用語音控制您的音樂和智能家居。",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "高解析度相機",
    description: "捕捉生活中的每一個精彩時刻。",
    image: "https://via.placeholder.com/300x200",
  },
];

// 主要組件
function ScrollAnimations() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Framer Motion + MUI 示例</Typography>
        </Toolbar>
      </AppBar>

      {/* 英雄區塊 */}
      <Box
        sx={{
          background: "linear-gradient(45deg, #3f51b5 30%, #f50057 90%)",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Container>
          <MotionTypography
            variant="h2"
            gutterBottom
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            用滾動動畫提升您的用戶體驗
          </MotionTypography>

          <MotionTypography
            variant="h5"
            paragraph
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            結合 Material UI 與 Framer Motion 打造絕佳視覺效果
          </MotionTypography>

          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="#products"
            >
              查看產品
            </Button>
          </MotionBox>
        </Container>
      </Box>

      {/* 產品區塊 */}
      <Box sx={{ py: 8 }} id="products">
        <Container>
          <MotionTypography
            variant="h3"
            align="center"
            gutterBottom
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            我們的產品
          </MotionTypography>

          <MotionTypography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            探索我們的熱門產品系列，為您的生活增添便利與樂趣
          </MotionTypography>

          <Box sx={{ mt: 8 }}>
            <Grid container spacing={4}>
              {products.map((product, index) => (
                <Grid key={product.id} size={{ sm: 6, md: 4, xs: 12 }}>
                  <MotionCard
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 50,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.title}
                      </Typography>
                      <Typography>{product.description}</Typography>
                    </CardContent>
                    <Box sx={{ p: 2 }}>
                      <Button size="small" color="primary">
                        查看詳情
                      </Button>
                    </Box>
                  </MotionCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* 呼籲行動區塊 */}
      <Box
        sx={{
          bgcolor: "background.paper",
          py: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container>
          <MotionBox
            sx={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              py: 6,
              px: 4,
              borderRadius: 2,
              bgcolor: "rgba(255, 255, 255, 0.9)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" gutterBottom>
              準備好了嗎？
            </Typography>
            <Typography variant="h6" paragraph color="text.secondary">
              立即使用 Framer Motion 和 MUI 提升您的 React 應用！
            </Typography>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button variant="contained" color="primary" size="large">
                開始使用
              </Button>
            </MotionBox>
          </MotionBox>
        </Container>
      </Box>

      {/* 頁腳 */}
      <Box sx={{ bgcolor: "background.paper", py: 6 }}>
        <Container>
          <Typography variant="body2" color="text.secondary" align="center">
            © 2025 示例公司。保留所有權利。
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default ScrollAnimations;
