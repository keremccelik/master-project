import { defineField, defineType } from "sanity";

export default defineType({
  name: "properties",
  title: "Properties",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "rooms",
      title: "Rooms",
      type: "string",
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "string",
    }),
    defineField({
      name: "garage",
      title: "Garage",
      type: "string",
    }),
    defineField({
      name: "adress",
      title: "Adress",
      type: "string",
    }),
    defineField({
      name: "furnished",
      title: "Furnished",
      type: "boolean",
    }),
    defineField({
      name: "balcony",
      title: "Balcony",
      type: "boolean",
    }),
    defineField({
      name: "pool",
      title: "Pool",
      type: "boolean",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Kiralık", value: "Kiralık" },
          { title: "Satılık", value: "Satılık" },
        ],
      },
    }),

    defineField({
      name: "yearBuild",
      title: "Year Build",
      type: "string",
    }),
    defineField({
      name: "basePrice",
      title: "Price (TRY)",
      type: "number",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "districts",
      type: "reference",
      title: "Districts",
      to: { type: "districts" },
    }),

    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),

    defineField({
      name: "imagesGallery",
      title: "Images gallery",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
