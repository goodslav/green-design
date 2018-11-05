export default `query FetchAll {
  organizations {
    id
    name
    phones {
      type
      number
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
