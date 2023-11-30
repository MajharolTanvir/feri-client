import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "@/constants/userRole";

export const SidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/dashboard/feedback`}>Feedback</Link>,
      icon: <TableOutlined />,
      key: "/dashboard/products",
    },
  ];

  const moderator: MenuProps["items"] = [
    {
      label: <Link href={`/dashboard/categories`}>Categories</Link>,
      icon: <TableOutlined />,
      key: "/dashboard/categories",
    },
    {
      label: <Link href={`/dashboard/subcategories`}>Subcategories</Link>,
      icon: <TableOutlined />,
      key: "/dashboard/subcategories",
    },
    {
      label: <Link href={`/dashboard/colors`}>Colors</Link>,
      icon: <TableOutlined />,
      key: "/dashboard/color",
    },
    {
      label: <Link href={`/dashboard/sizes`}>Sizes</Link>,
      icon: <TableOutlined />,
      key: "/dashboard/sizes",
    },
    {
      label: <Link href={`/dashboard/weights`}>Weights</Link>,
      icon: <TableOutlined />,
      key: "/dashboard/weights",
    },
    {
      label: <Link href={`/dashboard/products`}>Product</Link>,
      icon: <TableOutlined />,
      key: "/dashboard/products",
    },
    {
      label: <Link href={`/dashboard/promotion`}>Promotion</Link>,
      icon: <TableOutlined />,
      key: "/dashboard/products",
    },
    {
      label: <Link href={`/dashboard/feedbacks`}>Feedback</Link>,
      icon: <TableOutlined />,
      key: "/dashboard/feedbacks",
    },
  ];

  const admin: MenuProps["items"] = [
    {
      label: "Users",
      key: "users",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/dashboard/Moderator`}>Moderator</Link>,
          key: `/dashboard/Moderator`,
        },
        {
          label: <Link href={`/dashboard/buyer`}>Buyer</Link>,
          key: `/dashboard/buyer`,
        },
        {
          label: <Link href={`/dashboard/seller`}>Seller</Link>,
          key: `/dashboard/seller`,
        },
      ],
    },
    {
      label: <Link href={`/dashboard/global-discount`}>Global discount</Link>,
      key: `/dashboard/global-discount`,
      icon: <ProfileOutlined />,
    },
    ...moderator,
  ];

  const buyer: MenuProps["items"] = [
    {
      label: <Link href={`/dashboard/products`}>Products</Link>,
      icon: <TableOutlined />,
      key: `/dashboard/products`,
    },
    ...defaultSidebarItems,
  ];

  const seller: MenuProps["items"] = [
    {
      label: <Link href={`/dashboard/products`}>Products</Link>,
      icon: <TableOutlined />,
      key: `/dashboard/products`,
    },
    {
      label: <Link href={`/dashboard/local-discounts`}>Local discount</Link>,
      icon: <ScheduleOutlined />,
      key: `/dashboard/local-discounts`,
    },
    {
      label: <Link href={`/dashboard/promotions`}>Promotion</Link>,
      icon: <ThunderboltOutlined />,
      key: `/dashboard/promotions`,
    },
    {
      label: <Link href={`/dashboard/blogs`}>Blog</Link>,
      icon: <CreditCardOutlined />,
      key: `/dashboard/blogs`,
    },
    ...defaultSidebarItems,
  ];

  if (role === USER_ROLE.admin) return admin;
  else if (role === USER_ROLE.moderator) return moderator;
  else if (role === USER_ROLE.buyer) return buyer;
  else if (role === USER_ROLE.seller) return seller;
  else {
    return defaultSidebarItems;
  }
};
