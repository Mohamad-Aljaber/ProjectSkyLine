import React, { useState } from "react";
import { useRouter } from "next/router";
import InputFieldWithIcon from "@/components/mui/InputFieldWithIcon";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
} from "@mui/material";

// مكونات الأيقونات
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Index() {
  const theme = useTheme();
  const router = useRouter();
  const PMain = theme.palette.primary.main;
  const PDark = theme.palette.primary.dark;

  // تهيئة useState لجميع المدخلات
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    email: "",
    expire: "",
    cvv: "",
  });

  // دالة لتحديث القيم بناءً على المدخلات
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // دالة الإرسال
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // router.push("step4"); // الانتقال إلى الصفحة التالية
  };

  // بيانات بطاقات الدفع
  const paymentCards = [
    { text: "paypal", path: "/images/paypal.png" },
    { text: "VISA", path: "/images/VISA.png" },
    { text: "googlePlay", path: "/images/googlePlay.png" },
    { text: "mastercard", path: "/images/mastercard.png" },
  ];

  // الحقول كاملة العرض
  const inputsFullWidth = [
    {
      type: "email",
      label: "Email address",
      value: formData.email,
      onChange: (value: string) => handleInputChange("email", value),
    },
    {
      label: "Name of card",
      value: formData.cardName,
      onChange: (value: string) => handleInputChange("cardName", value),
    },
    {
      type: "number",
      label: "Card number",
      value: formData.cardNumber,
      onChange: (value: string) => handleInputChange("cardNumber", value),
      placeholder: "5050 7865 9340 1515",
      iconPosition: "start",
      icon: (
        <img
          src="/images/iconPaypal.png"
          alt="Card Icon"
          style={{ width: "50%" }}
        />
      ),
    },
  ];

  // الحقول نصف العرض
  const inputs = [
    {
      type: "text",
      label: "Expire",
      placeholder: "MM/YYYY",
      value: formData.expire,
      onChange: (value: string) => handleInputChange("expire", value),
    },
    {
      type: "text",
      label: "CVV",
      placeholder: "---",
      value: formData.cvv,
      onChange: (value: string) => handleInputChange("cvv", value),
    },
  ];

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontWeight: 700, textAlign: "start" }}
              >
                Checkout
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontWeight: 700, textAlign: "start" }}
              >
                Payment Details
              </Typography>

              {/* عرض بطاقات الدفع */}
              <Box sx={{ textAlign: "start", mb: 3 }}>
                {paymentCards.map((item, index) => (
                  <img
                    key={index}
                    src={item.path}
                    alt={item.text}
                    width="100px"
                    style={{ marginRight: "10px" }}
                  />
                ))}
              </Box>

              {/* الحقول كاملة العرض */}
              {inputsFullWidth.map((input, index) => (
                <InputFieldWithIcon
                  key={index}
                  label={input.label}
                  value={input.value}
                  onChange={input.onChange}
                  placeholder={input.placeholder}
                  type={input.type || "text"}
                  iconPosition={input.iconPosition}
                >
                  {input.icon}
                </InputFieldWithIcon>
              ))}

              {/* الحقول نصف العرض */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                }}
              >
                {inputs.map((input, index) => (
                  <InputFieldWithIcon
                    key={index}
                    label={input.label}
                    value={input.value}
                    onChange={input.onChange}
                    placeholder={input.placeholder}
                    type={input.type || "text"}
                  />
                ))}
              </Box>

              {/* ملخص الدفع */}
              <Box sx={{ textAlign: "start", mt: 3 }}>
                <Typography>Shipping: $10.00</Typography>
                <Typography>Subtotal: $100.00</Typography>
                <hr />
                <Typography>Total: $110.00</Typography>
              </Box>

              {/* زر الإرسال */}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: `${PDark}`,
                  padding: 2,
                  my: 2,
                  "&:hover": {
                    background: `${PMain}`,
                  },
                }}
              >
                Continue to Checkout
              </Button>
            </Box>
          </Container>
        </Grid>

        {/* الجزء الجانبي */}
        <Grid
          item
          xs={0}
          md={5}
          sx={{
            background: `${PMain}D6`,
            overflow: "hidden",
            textAlign: "center",
            display: {
              xs: "none",
              md: "flex",
            },
            justifyContent: "center",
            alignItems: "center",
            px: "1rem",
          }}
        >
          <img
            src="/imagesSVG/signup-banner4.svg"
            alt="SVG Example"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </>
  );
}
