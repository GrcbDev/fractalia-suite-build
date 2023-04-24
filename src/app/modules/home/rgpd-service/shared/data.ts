/*

1. logo : prueba de como vendría
2. other: deberia venir en el campo de question el valor por si son mas de 1 -- no va
3. otherId:  actualmente se usa el aswerId 13 pero en produccion será asi?
  --- Tiene que ver correctamente la data con ese campo hasOtherField por que si no saldrá error*
4. el Tipo de empresa de donde lo saco -- ok revisado
5. editar, cuando se descarga* campo finalizado para saber si voy a edición

*/

export const rgpdData = {
  companyName: "Nombre empresa",
  cif: "cif",
  phone: "975360240",
  companyEmail: "direccion@gmail.com",
  rightsEmail: "dasdsa",
  country: "asdsadas",
  city: "asdasd",
  address: "dsad",
  postalCode: "dasdas",
  businessActivity: "sadas",
  logo: "",
  finished: true,
  sections: [
    {
      sectionId: 1,
      section: "Datos de empresa",
      completed: true,
      enabled: false,
      sectionQuestion: "",
      sectionExplanation: "",
      questions: null,
      hasCompanies: false,
      companiesTitle: "",
      companiesSubtitle: "",
      possibleThirdTypeCompanies: null,
      thirdCompanies: [],
    },
    {
      sectionId: 2,
      section: "Clientes",
      completed: true,
      enabled: true,
      sectionQuestion:
        "¿Su organización trata datos personales de clientes (personas físicas)?",
      sectionExplanation:
        "Se refiere a datos personales de aquellas personas con las que usted mantiene una relación comercial.",
      questions: [
        {
          questionId: 1,
          question:
            "A continuación, marque qué datos personales trata de sus clientes",
          possibleAnswers: [
            {
              answerId: 1,
              answer:
                "Identificación (nombre, apellidos, NIF, dirección postal, teléfono, email)",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
            {
              answerId: 2,
              answer:
                "Características personales (estado civil, fecha y lugar de nacimiento, edad, sexo, nacionalidad)",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
            {
              answerId: 3,
              answer: "Datos académicos",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
            {
              answerId: 4,
              answer: "Datos bancarios",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
          ],
          answersSelected: [1, 2, 3, 4],
          other: null,
        },
        {
          questionId: 2,
          question:
            "Marque para qué utiliza los datos personales que solicita a sus clientes",
          possibleAnswers: [
            {
              answerId: 5,
              answer: "Prestarles un servicio",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 6,
              answer: "Facturar",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
            {
              answerId: 7,
              answer: "Enviar publicidad postal o por correo electrónico",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 8,
              answer: "Servicio postventa y fidelización",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
          ],
          answersSelected: [6],
          other: null,
        },
        {
          questionId: 3,
          question:
            "Marque a quien entrega los datos personales de sus clientes",
          possibleAnswers: [
            {
              answerId: 9,
              answer: "Agencia Estatal de Administración Tributaria",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
            {
              answerId: 10,
              answer: "Instituto Nacional de la Seguridad social",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 11,
              answer: "Bancos y entidades financieras",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
            {
              answerId: 12,
              answer: "Fuerzas y Cuerpos de Seguridad",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 13,
              answer: "Otros",
              hasFieldOther: true,
              hasAnswersSelected: true,
            },
          ],
          answersSelected: [9, 11, 13],
          other: "añadiendo nuevos items",
        },
      ],
      hasCompanies: true,
      companiesTitle:
        "Si entrega los datos personales de sus clientes a una gestoría, indique los datos de la misma",
      companiesSubtitle:
        "Gestorías a las que entrega datos personales de sus clientes:",
      possibleThirdTypeCompanies: [
        { rgpdModelThirdTypeCompaniesId: 1, thirdTypeCompany: "Gestoría" },
      ],
      thirdCompanies: [
        {
          type: 0,
          name: "cc",
          cif: "cc",
          address: "cc",
          serviceProvided: "cc",
        },
        {
          type: 0,
          name: "ee",
          cif: "ee",
          address: "ee",
          serviceProvided: "ee",
        },
        {
          type: 0,
          name: "eef",
          cif: "eef",
          address: "eef",
          serviceProvided: "eef",
        },
      ],
    },
    {
      sectionId: 3,
      section: "Potenciales clientes",
      completed: true,
      enabled: true,
      sectionQuestion:
        "¿Su organización trata datos personales de potenciales clientes (personas físicas)?",
      sectionExplanation:
        "Se refiere a datos personales de aquellas personas físicas con las que usted todavía no mantiene una relación comercial.",
      questions: [
        {
          questionId: 4,
          question:
            "A continuación marque qué datos personales trata de sus potenciales clientes",
          possibleAnswers: [
            {
              answerId: 14,
              answer:
                "Identificación (nombre, apellidos, dirección postal, teléfono, email)",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 15,
              answer:
                "Características personales (estado civil, fecha y lugar de nacimiento, edad, sexo)",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
            {
              answerId: 3,
              answer: "Datos académicos",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
          ],
          answersSelected: [15, 3],
          other: null,
        },
      ],
      hasCompanies: true,
      companiesTitle:
        "Si comparte los datos personales de sus potenciales clientes, indique a quién se los entrega",
      companiesSubtitle:
        "Empresas a las que entrega datos personales de sus potenciales clientes:",
      possibleThirdTypeCompanies: [
        {
          rgpdModelThirdTypeCompaniesId: 2,
          thirdTypeCompany: "Agencias de marketing",
        },
        { rgpdModelThirdTypeCompaniesId: 3, thirdTypeCompany: "Imprentas" },
        { rgpdModelThirdTypeCompaniesId: 4, thirdTypeCompany: "Terceros" },
      ],
      thirdCompanies: [],
    },
    {
      sectionId: 4,
      section: "Empleados",
      completed: true,
      enabled: true,
      sectionQuestion: "¿Su organización trata datos personales de empleados?",
      sectionExplanation: "Se refiere a datos personales de sus empleados.",
      questions: [
        {
          questionId: 5,
          question:
            "A continuación marque qué datos personales trata de sus empleados",
          possibleAnswers: [
            {
              answerId: 16,
              answer:
                "Identificación (nombre, apellidos, número de Seguridad Social, dirección postal, teléfono, email)",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 17,
              answer:
                "Características personales (estado civil, fecha y lugar de nacimiento, edad, sexo, nacionalidad, porcentaje minusvalía)",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 3,
              answer: "Datos académicos",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 18,
              answer: "Datos profesionales",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
            {
              answerId: 4,
              answer: "Datos bancarios",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
          ],
          answersSelected: [18],
          other: null,
        },
        {
          questionId: 6,
          question:
            "Marque para qué utiliza los datos personales que solicita a sus empleados",
          possibleAnswers: [
            {
              answerId: 19,
              answer: "Gestionar la nómina",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 20,
              answer: "Formación",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
            {
              answerId: 21,
              answer: "Mantenimiento de la relación laboral",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
          ],
          answersSelected: [20],
          other: null,
        },
        {
          questionId: 7,
          question:
            "Marque a quien entrega los datos personales de sus empleados",
          possibleAnswers: [
            {
              answerId: 9,
              answer: "Agencia Estatal de Administración Tributaria",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 10,
              answer: "Instituto Nacional de la Seguridad social",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 11,
              answer: "Bancos y entidades financieras",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 12,
              answer: "Fuerzas y Cuerpos de Seguridad",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 13,
              answer: "Otros",
              hasFieldOther: true,
              hasAnswersSelected: true,
            },
          ],
          answersSelected: [13],
          other: "empleados otros",
        },
      ],
      hasCompanies: true,
      companiesTitle:
        "Si la gestión de las nóminas las realiza una gestoría, indique los datos de la misma",
      companiesSubtitle:
        "Empresas a las que entrega datos personales de sus potenciales clientes:",
      possibleThirdTypeCompanies: [
        { rgpdModelThirdTypeCompaniesId: 1, thirdTypeCompany: "Gestoría" },
      ],
      thirdCompanies: [
        {
          type: 0,
          name: "cc",
          cif: "cc",
          address: "cc",
          serviceProvided: "cc",
        },
      ],
    },
    {
      sectionId: 5,
      section: "Candidatos",
      completed: true,
      enabled: true,
      sectionQuestion: "¿Su organización trata datos personales de candidatos?",
      sectionExplanation:
        "Se refiere a datos personales de aquellas personas que dejan su currículum o rellenan un formulario de solicitud de empleo.",
      questions: [
        {
          questionId: 8,
          question:
            "A continuación marque qué datos personales trata de candidatos a un empleo",
          possibleAnswers: [
            {
              answerId: 14,
              answer:
                "Identificación (nombre, apellidos, dirección postal, teléfono, email)",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 22,
              answer:
                "Características personales (estado civil, fecha y lugar de nacimiento, edad, sexo, nacionalidad, otros excluyendo datos de raza, salud o afiliación sindical)",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 3,
              answer: "Datos académicos",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
            {
              answerId: 18,
              answer: "Datos profesionales",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
          ],
          answersSelected: [3],
          other: null,
        },
      ],
      hasCompanies: false,
      companiesTitle:
        "A continuación, marque qué datos personales trata de candidatos a un empleo",
      companiesSubtitle: "",
      possibleThirdTypeCompanies: null,
      thirdCompanies: [],
    },
    {
      sectionId: 6,
      section: "Proveedores",
      completed: true,
      enabled: true,
      sectionQuestion:
        "¿Su organización trata datos personales de proveedores (personas físicas)?",
      sectionExplanation:
        "Se refiere a datos personales de aquellas personas físicas que proveen de productos o servicios a su empresa. Si sus proveedores son personas jurídicas no tiene que marcar la casilla de proveedores.",
      questions: [
        {
          questionId: 9,
          question:
            "A continuación marque qué datos personales tratas de sus proveedores",
          possibleAnswers: [
            {
              answerId: 1,
              answer:
                "Identificación (nombre, apellidos, NIF, dirección postal, teléfono, email)",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 4,
              answer: "Datos bancarios",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
          ],
          answersSelected: [4],
          other: null,
        },
        {
          questionId: 10,
          question:
            "Marque para qué utiliza los datos personales que solicita a sus proveedores",
          possibleAnswers: [
            {
              answerId: 23,
              answer: "Facturación",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 24,
              answer: "Realizar pedidos",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 25,
              answer: "Rellenar un formulario",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
          ],
          answersSelected: [25],
          other: null,
        },
        {
          questionId: 11,
          question:
            "Marque a quien entrega los datos personales de sus proveedores",
          possibleAnswers: [
            {
              answerId: 9,
              answer: "Agencia Estatal de Administración Tributaria",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 10,
              answer: "Instituto Nacional de la Seguridad social",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 11,
              answer: "Bancos y entidades financieras",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 12,
              answer: "Fuerzas y Cuerpos de Seguridad",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 13,
              answer: "Otros",
              hasFieldOther: true,
              hasAnswersSelected: true,
            },
          ],
          answersSelected: [13],
          other: "proveedores otros",
        },
      ],
      hasCompanies: false,
      companiesTitle: "",
      companiesSubtitle: "",
      possibleThirdTypeCompanies: null,
      thirdCompanies: [],
    },
    {
      sectionId: 7,
      section: "Empresas de terceros",
      completed: true,
      enabled: true,
      sectionQuestion:
        "¿Su organización tiene contratadas terceras empresas que le prestan servicios como pueden ser los de mantenimiento de su página web, desarrollo de programas informáticos, proveedor de correo electrónico, hosting, servicio de limpieza, servicio de videovigilancia u otros?",
      sectionExplanation: "",
      questions: null,
      hasCompanies: true,
      companiesTitle: "Indique los datos de dichas empresas",
      companiesSubtitle:
        "Empresas a las que entrega datos personales de sus clientes:",
      possibleThirdTypeCompanies: [
        { rgpdModelThirdTypeCompaniesId: 4, thirdTypeCompany: "Terceros" },
      ],
      thirdCompanies: [
        {
          type: 0,
          name: "cc",
          cif: null,
          address: null,
          serviceProvided: "cccc",
        },
      ],
    },
    {
      sectionId: 8,
      section: "Videovigilancia",
      completed: true,
      enabled: true,
      sectionQuestion:
        "¿Su organización capta imágenes mediante cámaras de videovigilancia con fines de seguridad?",
      sectionExplanation:
        "Si tiene instaladas cámaras de videovigilancia en su negocio, márquelo y le daremos pautas a seguir para poder utilizarlas cumpliendo con la normativa de protección de datos.",
      questions: [
        {
          questionId: 12,
          question:
            "Marque a quién entrega las imágenes captadas por sus sistemas de videovigilancia",
          possibleAnswers: [
            {
              answerId: 9,
              answer: "Agencia Estatal de Administración Tributaria",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 10,
              answer: "Instituto Nacional de la Seguridad social",
              hasFieldOther: false,
              hasAnswersSelected: false,
            },
            {
              answerId: 11,
              answer: "Bancos y entidades financieras",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
            {
              answerId: 12,
              answer: "Fuerzas y Cuerpos de Seguridad",
              hasFieldOther: false,
              hasAnswersSelected: true,
            },
            {
              answerId: 13,
              answer: "Otros",
              hasFieldOther: true,
              hasAnswersSelected: true,
            },
          ],
          answersSelected: [11, 12, 13],
          other: "otros final",
        },
      ],
      hasCompanies: false,
      companiesTitle:
        "Marque a quién entrega las imágenes captadas por sus sistemas de videovigilancia",
      companiesSubtitle: "",
      possibleThirdTypeCompanies: null,
      thirdCompanies: [],
    },
  ],
};
