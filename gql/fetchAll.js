export default `query FetchAll {
  organizations {
    id
    name
    phones {
      type
      number
    }
    addresses {
      line_1
      line_2
      line_3
      city
      county
      country
      postcode
      type
    }
    images {
      title
      description
      url
      order
    }
  }
  categories {
    id
    name
    description
    images {
      title
      description
      url
      order
    }
  }
  galleries {
    id
    name
    images {
      title
      description
      url
      order
    }
  }
  people {
    id
    email
    first_name
    last_name
    job_title
    department
    company
    biography
    phones {
      number
    }
    images {
      title
      description
      url
      order
    }
  }
  articles {
    id
    title
    description
    created_at
    category {
      id
      name
      description
    }
    images {
      title
      description
      url
      order
    }
  }
  menus {
    id,
    name,
    description
  }
  products {
    name
    description
    images {
      title
      description
      url
      order
    }
  }
}
`;
