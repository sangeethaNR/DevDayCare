import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
// add images to card

function Activities() {
  const {itemId} = useParams()
  return (
    <React.Fragment>
    
      <header style={{display:'flex', flexDirection:"row"}}>
        <h1>Activities Page</h1>
        <Link as={Link} to="/profile" style={{textDecoration:"none"}}>
          View Profile here
        </Link>
      </header>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={10} style={{padding:"5rem"}}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCaG9R0Yglyu45si1cvGm2Ij7o9Q9Y-P5g1g&usqp=CAU"
                alt="photos image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Photos
                </Typography>
              </CardContent>
              <CardActions>
              <Link as={Link} to={`/addPhotos/${itemId}`}>
                  Add
                </Link>
                <Link as={Link}  to={`photos/${itemId}`}>
                  View
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://thumbs.dreamstime.com/b/set-children-doing-activites-illustration-set-children-doing-activites-126758119.jpg"
                alt="daily activities image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Daily Activities
                </Typography>
              </CardContent>
              <CardActions>
                <Link as={Link} to="/dailyActivities">
                  Add
                </Link>
                <Link as={Link} to="/dailyActivitiesHistory">
                  View
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIWFhUVGBcXGBUWFxgYFxcYFxcXFxcXGBcaHyggGBolHRUVITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lICUtLS0tLTAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAEDBAYCBwj/xABDEAACAQIDBQYDBwEHAgYDAAABAhEAAwQSIQUxQVFhBhMicYGRMqGxB0JSYsHR8DMUI0NygpLxU+Fzk6KzwuIkVGP/xAAbAQACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EADgRAAEEAAMECQQCAAUFAAAAAAEAAgMRBCExBRJBcRNRYYGRobHR8CIyweEGFCNCgrLxFVJiotL/2gAMAwEAAhEDEQA/AN6okxzow+0sLh7cXMRZTmXuIvnvNeX/AGqY2LNrDj/GeWHNEgke5X2rzXaceEef6UTiX2d1Vtbla+gNodt9mhD/APm2W3fAxfXl4AazmO+0bZsEC67cstp9/wDqArxjv2yFJ8JMx1qN5GhjTy49aGXSwXa9YwH2j4VrqWst1VdgudgoVSdxPiJiYHrNbmvmhxXunYDahxGCtMxl0m2x4kpoCepXKfWi8M8/YVFzaWjqC/AORxBO4MNG8idG8t9Trvoo6AgggEHeCJB8xQe1mB+4Of4ROENWeSGWMWLSQQco/CCxUdFGpA5D0FFLbhgGUgg6gjUEdDQ6/hWDHKoyQIjhwjL+36a1gWHwNl1nmCeMr+0HrSZspjO6/wAUYQDmFfwmy7NsuUtqDcZncwCWZiSZPLXdwq2mBtMpRrSMhIOUopWeeUiJodh9pGQtxInTOviT1HxL7EDnRm0QASTA50S1wdmFW4EaoFtTsVgrxRu5S2yOrTbULmCkEowGjAjStFVS7ipA7pkbXVpzARvEA6n10qHE+MeLUcpIHrwPrVck7WGivAEhWruLVeZPJQW9CRoPWKrrjHMkpkEaAkFvULoPQmqiYhSMtpGcAaC2oyRyDmE9Jq0ttsjM4y6GFkE7vvEaT0E+ZqLXSyEBooLpDQM1FsixmaTw+po1ePAcKE7DuAMRzg/p+tFrg1NPcVvFxANHglzMgChjXVIgmGHzqDFsCJZlkDhvPnVDbC3UdjkYqTow1HryqLD4XvBJugcwBqKyTnObbXDn3eqbNa2g61Cry0DnV7aFwIkTqdT+lVL9k2zNrxDiCRM8xXFjDu5z3NI1C8SeBPSqLyV2RoouMQbdpecCTVO3iLxGcEAHnxprl0XFykwf5pVaziGeLIEMN56c65ZKgG5J8MArs9xgWbruFSbSv2wuYeE/WrqbHtoPGczHn+w3CmubMsmIAkaga/8AFS3TxXN5t2hH9pyjMuh3x90+YozYuB1VhuYA1UvtbByso6cKhS66sERpUgkTrFMMFjehJD7LT5fOPoqp4OkAIyPqrz26guICCpGhBBHQ6Gu7WM1CuACdxG4/tUt1a0uFxTJRkbHnyKWyRuYaOS8s2zsm7h2IIJT7rcCOEngap4fB3LnwIzeQJHqeFesGkBwoR2x2l30vodVWmrdtPDacwE9d15ftBsOclm2pEZVUEfmjWqt/EHifQUTxeAJ1X2/ahN/CvOqn01rLYjCzQPLZWkdvA8jomEEscgtpv1ULXT5VxU6YVzuU+ulX8PscnVzHQV6HDyzGo2k93508VOSeOMW8gIUiEmAJNEbex7hEzHSjFjDKnwipqf4bYOVzuz6h7n27ylU21TdRDx+eq84+1VD32EbhFwesp+9YXag+E+f6V6P9q+HJs2LoGlu7DHkGG/3UD1rzvaY8IPX60znFSFLWaKnesgKpDAlhqBvXzqAn5VJbYAGVmRprEHn1rkRBkGeB5VSpKJq9W+x27OGvJ+G9Po1tP1U15S1et/ZJs57eGe6wgXnBTqqCJ9SW9quw974UH6LcgxrUiY5wDmUOZ0y+DTl4iQT6iqW0LTvadbbZHKkK34W4GgdntG9phbx1vumOgvL4rL+v3T0PyoXarZba5gyAzROD3SCDqt1bcEAjcar38CjHMBlbmOP+Ybm+tDUvPCtauCN/4kcctPkw3dd1E7WPQwCcrHcG4nkDuP1pbHI14ryRJaQh1626HxKYP318Q/1Dep9I61bsWkIBYA5SYnXL1E7vOiFTYdANYEneY1MbpNQOHBORpe38s1Tw4FwFkYRuDRKz0/F71NhcAqjxE3G/E8E+gACqPIVaZwN5iedVsRjMvwoW6yAo8yTPsDVjGMi/agSXK1VfHOAjCRJG7jVa61xvvlQeCQP/AFEE+oihuJxli2y2Aw725PhnM8KCxZyTMaRJ51OGdrpWtbnmPVce07pK6t3CpDDeK0eFxC3Vkb6zVd2bzIcymD9a0M0W9mNUtaaWhu250oBidgFXL22gHePOjOE2mj6No383Vae3I5ik2IwLJLOhRUU7maIJgcGqTPiIG88fIcKqXWh8x3Rw4Vc2ij2znAleMbx5jlVZdq2yNVB+VIJIyw7rxRR7DvZjNCWU3LkIOswa7t2mwxZxDsxG/QgDgNau3dpINVGX1JoZduPdPgUkDef0qqwFdmddFPe2g1yCZWTGtSJcZSPFINUmsXDp3eXqdPrXeIwl7QW5bplIM/SK7uknLNe+kZKXaJD3FXn8qp3Wey8zIiJjf6UY2dsBgua62R+AnNHUmd/kaTYFjoziOYGposYGc1TdeWXNVHERjK1R2SveHMZygkiRGun/ADRpqRUaDluqtiLoEKPib6cWP8309weGdANwVz437Dml08okO9p2dialSpU8QqVPTUq8L4LiVKlTV5dT0qanri8oMbhrd221u6oZGEMG3Rv9I3zXhN8LluBTmQMwRuahoQz10r2Ptpm/sOJyzPdkab4MZh7TXk42VeazpZeMoPwkbteNBYtwBAKuiY52gvuQKu7l1soWNJ31ft7BxB/w48yo/WpW2Bf0VioA6z9BQZkYOKKGDxBz3D4e6BsK9T+yrtEbiHBOPFaUtbP4kzQVPVSw9D0rFL2abjcHoCaP9gdmizjbbZySQ67oGqk/UCpwztEgorr8BOGkubpnqOC9XqO/ZV1KOoZToVYSD6GpKVNkuWYu9n72HJfAXIG84e5rbP8AlJ1U/wAmpMD2jtXGNjEp3F3cbd3VW/ysdCP5rWjqntPZlnEJkvIGHCd46hhqKW4rZccubMj5IuPFubk7P1/atYRmQ6M2XdkY5h5qTqPKY6UVGMeAEt6R8TNA9AAT7xXn5wOMwWthjibA/wAF/wCoo/I3H09qsjbu0MQAuGwww6xBu3/injlQj6gilBw2LY/cq0XvxuG9a2OKvKv97dKJCwXJgDnBbd/xWdxfbeyWNvC27mKuf/zEIPNzw6gEVRtdk1dhcxl65iX5MStseSg7vl0o9h8OltQqKqqNyqAB7Ci4tjucd6ZyofimtyaL9Pf0QN8PtHE/174w1s/4eH+OORuHcfIx0q9srYGHw5zW08Z33GJZzO/xHd6RROlTaHCRQ/Y3v4oV8z36lKlSpUQqk0Vaw+OuJuMjkarUqi5jXarwKJDtFbmLisOsae9O1nCXtQEJ8tfca0MIqF8Ih+77afSh34VrlMSOGiMHYNjhbX3n5GrFrDIojL7j9Kz62mX4brjpMj2qQXsQN10HzUftQ42ewO3g0WpmZ5FElHxaSZyLPOBSvCfvER7UCGLxH4k9q5bEYk/4ij/TP1qRwtit3Lw9KUN/O0Wu6AhmzTuEbus76o3LyoNSFHU0ObD3G+O+5/ywv0p7ez7Y1jMebGfrpU48GG++p8TmvOkLtV220C+lpZ/O2ij9TXVizlkklmO9jx6dB0qWuLjwKucY4GGR5oDUrjWue4NbqV3TM0a1Cbmnxa8qp37jSJJI5df5NJJf5FDukRtN1kTVetplHst5I3iK46+1K93k8QPrUTOeZqMGlWYm2hiZjb3nxoeAoJrHhomfa0eCdsSV6zpFSZniZ9gKgiW8h9a7VoqQ2jigwM6R1c8/HXzXjhoib3RfL8aKZb541134qtSzDnRcO3sZGKJDuYz8RXnZ7VQ/Z8DswCOSn2gk2rg5o30NZ3C+KxH5WH1FahxIjnQLszs97y5FHwkhidy+f7VptpNJcyu0KGx5Q2KXeNAFp9VmKrYgajSvWMB2Rwllc1wd4Rva4fCP9O4DzmqW1+1ODswtkZiJEWlAX/doPaaBEG7m4gI9+1OkJbBG53l7+a87w2yr9wwll2n8pj3Ogq9snZq4a9ba+w7wsAlpTJBY5czngBNXdo9tb76W1Foc/ib3Og9qyiXj3odiSc4YkmSSCDqa6C1pBbmuFs8rSHgNFaA2fHTw8l6xTU9MK0ZWSSp66yQQD03U4eWaBooj56fSk2P21FhmgsG/bXOBB+n6eF9eSJhwrpLvKq81wqTyp1WTFLaACZY4iZ9d0VbuOoKkRopJ3TPClLv5I8SSDd+mhudYscdbzrSsgavRE/0fpab1u1WvWwCQJMGJ4TxqOrUqY1AAERxJJk1Xv3By9qI2bt6PdEc5Jd9RLsqoDe4AVlY0OnWaVc2EddsHVl2/PVc0qcjcefvTVo4ZmTRiSM205goNzS1xa7UJUqVKrFFKlSpAV5eSpiY1NVtr4g27TspGcAkDeB51Dtey7YdxII7s5o8MkLqSOU0rxG1oY8mfUfLxz8kbFgnvzdkFfBp6rpj1UW8xhX0UkEqYXNv8gYoa+3cznu1gDmCx4wTG4HLwmuYbarZfuaR5j3vuV3/SpXH/AA8x4IpZxAaSNwJE8CRvipVMiRxrKHHsua2DCkkxxGpkE8t3vWh2UWNpS0btPLh77/WiMNi+lduVoMzwv5p1pfLFJC/o5BR1VulSpUcoJmcDfVPFFjubd031V2jiDmgfzlUrXI86wu09qTYhxY00zSusA6nnqOrJaPCYJsTQ85u9OSVm7I6098aVXDa/OkTSjcztHUprDcKlqlbbU+lSm8a45meS8QplGprp2iobNznTOczR/Irm7nmvUkqs+7Qc6f8As35j8qmHKlXt88Fyyr9FsI1rCYYECJ8UcXdtT/OAFCKC4/Hs19rbGFtqAo4cyfMyPYV9Ex7t1gd214rPbPgM8hZeWp7v+fVC+0O2r1+4wdvACcqj4Ry04nqaBYndVna2KtLcabiDcdWHIUKxO2MOB/VU+Un6CklOcbWu3oYo90EAVpYCkqte3mqr7fsDcWPkp/WKpX+0CTojesD9TVnRvI0Qb8Zhx/nC9twlzMiNzVT7gGreGWWGsdaDdlcV3uDw9yIzW105QI/SjKvEEcDMc4o3a2O/q4dri0kO+kn/ALbGvG+X6Cy8MQfIQDpdduaje+A2ZZ0PHSpbuXvC3Bk3dZE/ofU0iUYNAE/F1I4z1FQ2b5yFOKOJ0GqndXzpo3WloPb5kGvMck8AvMCjoeRTYle8gTGXnJ0rv+zF2jMBCanXdrVa8hWCTqeH88qtKxUMSIm3An1qI1aXaDVTJIaN08vH3UVhQFZs2YLu4STGtRXrukcz9J/ensWos+JgO81Agzp/xQDtBtE27Eo0OxIU8QB8TfQep5UVDh3SSBrMibs9h4/hWxx776GedfPO+xaNLgMgEHLoY4GAYPWCPeuqzXYRpsNOp7xjrv1VTrWlr6ZgmhmHja3QNA8Mlm8ZH0eIey7opU9Oiya7v22y/wB3v48/SqcZtCPDZVbur3+Fchwzpc7oda57vQk8OA3+1Db1wNdssQAEdo82tuNT1MVcwRiVIMk/yahx8G7aWFZHLK4jWcjOGDA8MnLjWcxGOmxB+o5dQyH7TaLDxw6C+1LaOBD23VSFZlYeI+HURPMb64XEkShWGXQzBBBkAjgQYO/kdKfGYBu8W4ACAGXTeFMMB11X51HiMdFzwKCbiooJjKMrPPn8XShWtLvpbqr86yzQK5fPdLYAIyvd37hLtAHksRG6agZlSBrE6tBB+KSZyccrT5ijzbEADF7gzEyGjLroddfyig20tl91u3x8M67tTpw9Tvpq1hY2qR+Gljc0NFju81QRt5J3TMkGeJ1HUkbuFaHs/LnQ+ZYkwByHkRWZLZvIwOMCSB6cfetA2y8gR0Ut3fxZQSxBUhjA36wYHKqpJSwhzTR4IfacEUxYXai/Aj3WlNs7945jdXFU8Dt6w2VVfXRfhbfujdp60Uv2xE7jTHC7XJcGzNoniPyPbwSKfA7tlp7kDv4dg+YiRzH68qhuXRxNG65KjlVM38djc643lvYRY9/G1fHtZwAD232jJA0B1YqY5xSN4cNaPU1Rd/HWmqkPeL/PzrUxtg8Wef6QSzh7kFgu/nofnSeR8SkeY096N0qsf/HoSBuvN93pl6qA2u+7c0V3/v0QWrFldJ51I9pJPh9tB7VyU5GKyGIa1jywOujV9dJw1++0GqTlhzpZxzqpdJB3VyLo51Ho1Zuo5Xk/2gW8u0T+e0h+q/8Axr1ivP8A7U9nEdzi1Gif3b/5WMqfeR/qFfSsQLYsezVec7RXx+gqqaI7RtyAw4fQ0ONL1dS5rlqemauFeXtv2aXC2zrM8DcX0F1wK0GLdgJB86odlcAbGDsWmEMtsZh+Y+JvmTRS4kgjnR0+HE2HMTuIr53qMMojlD+APlx8kPw+OIfXfvHUcR51euXRqQAD05cprObSBAniDBqOxthho/iHOYb34/zWsDidn72ceXZ89NCtecNvgPatBj72inl/P1qXGYrNHkRQI7WtkakjzX9jVfEbcQfCpYjdm0HrBJPyoZuBmrdrLmKyXBhXmvpOV9nrSM4rEhQGYwiKJP6AcSeVYTbOON1yYgRCr+FRuHnrJPMmpdo7Se4ZY6Dco0A8h+u+hTGab4XDNhHWeKbYPB9H9TtfTr8fgW17AH+5cfmHzUftWorJfZ+fDdH5l+h/atbWwwR/wG/OKw21hWMkHL0CSsRqKnS6PI/L3qK2smnv8o0pPth8G9VHf6+Hf+q5qWCbIRd/SrWfgRQLtFeS1kIJ7yZRVEmdV9jmIjjJiieJdlIyrmHEcvLlQm1b7zH5m3W7SsAd4ZiQPYZqStAvPgjwCM0XtX2CKXUByJKgyB0njWdx793iJzABxOpIUEzm+HXU6+ZrV3rSupVtQRBgkb+RGooFb7IWFnW42+AWGk9QJ96nC8MdvFThkaw24fCoxiEuoLbsSSfCwWMpnKs+cn0pY22Tah1i4igGROYfiUxr+k61n8Uj2br2wxAQiCTv3EacxNE9n4zEx4UW+oOsN4h7mR6imfStIzRe63IxuHXRNc64ZqbA7K720QIA4AcxqI5GRV/YuNbMbNy26uv3shCuPxSJAPrH0qvsg3UxGVwbaXFZlRoPiU6iQfCYYacaM4vFhN/oKVyUHEahCPzeQM0I7X4Kz3Fy6VAuKAQ66NmkASRvokt0lRPIT5xQrtOS+DZucE+jiptuYp7Kd7bysojMh0MHSVP6EUds+SBj96a74ca5oTExyObus7bV+lVTZ2PW8uZdN0g8J3eYq3Wqa8PG805JM5paaOqVKlSrq4uHcCoXvHhVXat0gwNKiwl3TxHyrGbV2lijM5jHFrWmqGRPbeufpS0GDwUYiDyASc/nBS3iQJmnt3ZqJ2k1XttqRw4UjDd4ZplWStX2BNVLloTUxNRyx1UaeVTY06NXdEeqvj8Gl629q4JRwVYbtDyPA8QelWKVfTFjF52/2dXAcq4hDb4Z1OcDkY0bz0qpf+y67PgxNsjjmRl9oJmvT6VVf14zwUt8rzvZf2XW1M4i+XH4bYyD1YkmPKK0eyuxOBw9wXbdmXG4u7PlPMBjAPWJrQ0qkImN4Lm8SnpqVKpriDbasankw+Y/grKu9bvaFnMh5jUelYXHpDnrr71mtow9HOSNHZ+/mtnsOfpYd06ty9vL0VZ7lV7lyu3qrcNBALQsaEzNXFKlU1eBS132fnW8P8p+tbCsd9nttme8FBOgOnn/AN62dy2V+IEeYitFs9wMDRz9Svne3W7uOf8A6f8AaFyDXbXJEVxTio43AMxLb0dwP4PzJAYfEGI1wUO2bjBFK22uGdQkSNN+vCg2AtX2vs5sMisqiSQIKz9ZrR3rpmBURunnWS3wLFZp63eAyU9rOImCI56z+tWFeaFYnFqi5nfKo3knQUNftNhV/wAaT0DH6CuAE6AqO5aO7S2XZvgd7bDRuOoYf6hBpYPC27Qi2sTvOpJjmx1PrVPZu21vKWVWy8GIyg+U6nzqW5enfoP5vqRLtDaiG8Cq+0Lo77DmfvXBPnbJ09qmOEt7yWJoNtbGgXLHIOSTu0ykfrXF3tMubLbXOddZgacjGtc3XGqCtArRHcVhkuWmsjTMpAnrNYvae0blwCyqnM3hYb2ldCscNRR3EdoUR1thGZyFOm4SAR1O/gKvYbAW1droSHeSxMkydSOnpTPB7OfI4h9Cu/8ASElxTY22LN6KvsHZxsp4viIAgcAJj11NFKVKtPHGI2hrdAkz3l7i46lKlUGMxdu0pe66oo3s7BR7mhT9prZ/o2r97qiZVPk90qD6TXJJmRi3uA5leYxzzTRaMYjDq4hh+4qjcwbj4QCPODVM9obv/wCle/32J/8Acp17T2h/Vt3rPV7ZKjze3mUeppXiItn4wi3t3usOAPkjopMVhhk011EZfO9TjCXTyHrUg2Tp8evHSrmDxlu6oe1cW4p+8jBh7ipqlFsXCMGYJ5k/il5208Q7Qgch72qlnZ6DeM3n+1WslPSphDBHCKjaBy+Wg5JXyG3uJSqW1hXbcvqdBRWxgkXhJ5mrNKptrG6ibl1n2HurWwdZQ61sz8Teg/erNvCIPuj11qbNXRpXJiZZfucT35eSvawDQIftSyMoIAEHhQyj+It5lI5/XhQEinOyZLY5h4HLkf3aHxAzBTUqVKmqHSrGdpcLlfod3kdR+orZ1Q25so3rJKCbibl5r06gj50BtKHpIrGoN+/zkmuxsUIMSN40HZH8H8d68+aq10VobfZzFN/hR1ZgPpJ+VXLHYm83xMq+SlvmY+lImwvPBbJ20sLHq8d2fosbXQQ8q36dirKf1rpH+Z1QfKKM4Ps9g7cEC2evxn31q9uEeTSFl/kOHaLaCfJZ77M7Lq925BCsuWTxJIOnOI+dej4mDabNugkefD50NGKtIIRSfPQVWxOLZ9505DdTPD4R7QLWT2hjhipjLVXw5BQUqVKmSXJUO2vjUsKHadWAgDfzPoJojVbH4G3eXJcWRMjgQeYNUYmETRFlDsvr/Ctgk6N4dw48lSx20bbJbt2SGbEHIGOuUffYjmAdxqbDdlMGsHusxH4mYz1ImD7VRsdmFt3FuWrjAqZhgGHXlwo/3rcIrOSbNxTMmtvkR7pt/bhOjlM5VBuA5AD5Cs3tftLbWQDnYfdX4R5tRPHYJb2lwsRyDFQfON9V7ewMMu60D5kn6mrWbFlP3kDssqv+/E3QFYrEY+7ecMRMTAA8IB3j/mr2x9ku7EiBOkj4VB3wdxPQVsEwNobraD/SKs0fFssNP1Oy6gFTJjyftb4qDCYbuwRnZgTpmM5RwA5Cp6VKmwFCgl5JJspUN2/tTuEGRQ924clq3MZmOsk8FUAknkKpdotpQ9nD274R3uAXMhU3Ut5HbMFMwMwUExuNC9jK913xF1+8KF7FpoA/u7blWeBoGdlkxwA3Us2htJmGa4D7qy6s/bVE4XDGaQN4ceXzJWsJszxC7fbvr/42HhSeFpdyL8zxJolz/n/NczSIrDyyPlcXyGz1/NOS0zI2sbutFBKetIe1Iml84qCmh+I2ShfvbRNm9/1bcAt/nHw3BruYH0qzgNvMrrZxYCOxhLy6Wrp/Dr/Tf8p38Can4VxicOlxGR0DIwgqdRTLA7Umwpq95vUfx1ctEFicDHMLGTuv3RylQDs7inR3wd1ixRQ9p2Ms1qcpVjxZDAniGXrR+txDMyaMSM0KzkjDG4sdqEfzzuHrTqnPWmFnrUgFY1oJ+5MD2JUqYmuN/lUi6sl5SUJ2lhoOYbifY0UVQK4xVrMpXnRGEnMMgfw48vmfcq3sDhSA0qc01axAJU6kjUaU1KvLymGMufiPyqvtPaly3ae5mPhUkcNeG7rFdUP25az2jbG9yg9MwJ+QNUYhzYonSZCgTwV0Ld+RrToSL5Xn5LC49GuS7sXc6ksZJ8v2q12R2i1u+LRPguGI4BuBH09aLbT2bbS2xmCqk5gZ1HA86qbF2OFRcQ4lzDIOCwdD1PGsbBjWtcJWXkfH5xWpeWSxFh0OQ/HgtrSoTZ2oQYfUc6KIwIkbjWtwePhxYO5qNQdf33LMYjCyQH6tOsaLqlSpUYh0qVKlXl5KlVbaGPtWENy64RRxPE8gN5PQV55iftCvd+Xtovc7hbbeY+8WHwsfUfWqpJ2R/crI4nP+1emUqyWx+3mHvOtt0a0zEAEwySdwzDUeoFddpO2tvDXVtIvesD/ewYyDkDuL9OmsTXunj3d68l7oX3u1n87lqqegGzu2GDuwBdyMfu3AVMnhJ8J9DRrEYhUEsY4DmxO4KPvE8hUw9pFg5KJY4GiFLTimZSNCII3ilUgeKisI20W2ae7u2xcL5nN5IZ2EyblxWjK0ngTMaboqWw93DAv3bXMM7s6tb1uW+8Jdla3vZZYkFZImIod9oDL/AGqMwPeWhaIH3HDMyg8JYOTH5etcWe0F8XLYuC0FLKrQrAjMYBzFoGscDWS2hhmiZzWDU556+et2mUPSMYJY+29Fp8DtC1eE2nDRvA3g8mU6qehFWqGdoLeEhLt+Fedbqkpdn8KsviO7dr5VWsNiVRXtXrWJRj4Q57u5HW4gKt/tFJ3QAjebp2++njSYRbRY7J4rzCOE0qFNtO8v9TBXxrE2zburPIZWk+1cr2hsDR+8t/8AiWbqD/cVj51X0El0G3yz9LRTcTE7RwRj+a01C7faHCHdirP/AJij6mmPaHCgwL6Mfw2z3jf7Uk1ERvJoA+BVhkYBZI8QuNtq3fYUoxRnuNZLCA2S5bZiATu1tLrwoPtbb2Kwt1rNm4rIIP8AfXgWBIEhWbVl4yeJI4Ubwtp8VetubTJZsMXAfwXbjlGQRbOqqA5OsEmNKr7VxsXWW3hTdCwCzFZBIDZfZgfWm+CmnjpjLNA5A6Z9/wAKQ41zHzFzexeskEbx7a0wNWBTOgO8VcYeoqAcoCop667jkT9frXJtt0PyNVljhw8M1K0qeuM/MEef77q6kVGwuoVtTDwc43Hf5/wVRo9iLIZSv8mgTCDBrQ7MxG/HuOOY9P0cvBBzNo2mpUqVM1SmJoDt64wtIQTnuXBEaGIJAHy96NYo+A8zoPWhm04OIs2/wI7gdTCr9GrL7enqVrODQXHvv8Jxs1tAu6z6D9rPbZfKqWAeBd+upPzafatGyxbVeSAfKs12gsEXQ3B1yeRB3exrU4nj0EewikTjcbT12TzTXg1B8RwojsTFGe7O7eP2obiOFd4FouKetWYScwStkHA+XEeC9iIhJG5p+HgtRSp64uYN7izau5HH4lzofNZB9QR61vpZBG3eOiyjGFxoKDaGOt2UNy64RRxPPgAN5PQV53tLtzfN/PYIW0oIFthOed7ProdNIOnqarfaA2L75beJyqbYJQ2wcjhj8YknXSOkVncPhLxR7ots1u3GZwPCJMDXcdaWz4tz8ozQ80fDhw0W8X6Ij2p21cxjq5AUIsBAZEySzCRvOntQK2SeE13cvHkRTpfG6IoVznOzdqiGhrcgmcNy9q4FyrRcc6M9juzBx2I7uSqKM1xhwWYgfmJP1PCob3WpHLO0AkTlOhgGDyIkHXmCPevXPsl2f3iPi7pLsrdzaLnNkVVUkpO6cwE/l6mvQMNg7aIttEAVVCAR91RAHXQVzhcJasqwtottSS7AQFk/E0bhuk1Em1U6SxSHbSWLh6wfl/2obtFrgtObKhrgU5FO4tw/mnpRXaNxWysuoI38+VZntlcdcHdKEiMuYjeLede8iNfgzbqd4eQOgDhwHpklsjaeQs9tLZNvE4Rf7Oe8e0zFw8B3uGe9F38LkknkCBGlY1luLmRTm4NbujxDof31HWrOz8W+Husbb925PhgSlxIEKV3MBvjQ66GtLe2phcQIxuH7tl071ZKjqHWHTnrp1NZEGXDktIL2kk/+Qs2bH+bPiKN2tBh5WuiBc3LsyrvGmXAgjIaHNZAYsA6oy6RLS+XopEkD2q3aa2+bI2Y7wJ1DcXUblbjMTWit9llujNhcaLi/myXgPVYPuaoYvsViP+nYfqC9s/Ro96mMdhnH76Pbl6+6I6KIt+k5dRH5bf8AtU2E7QXkuWzcul0U+JVURuMNAElpAmI0mBRHH9rz4Vw4D+IsXOZVUncu6Sd+nCsftHZOIsaMr21OuY3c1oHqYIB84prSYj4u9V/JUYfpVv8AXifTxRHkfBCjZ3SOtjSQNQNP/aj5LYntPY7iDb/vw092VnxRHxkRlnWeXXSh79ocSy92iWrZBLF11PUKpWB56jpWezYiCvh11JyNP1pXXvxNx1QD70R8yf0rwwzdBXeb8vxmpM2UW3bHHnQrsu67yjOI29iie9a9GVJAVVho0lwdZPIEdK3Ox9kqtvNdlrlyHcldzFVGVR91QFAjpWI7N7KcXLWLvy1vvUtotwb88gXQsCIc24MfiPI16fTfZUURDntokHdyGmhI7UpxtMcGNFV32tWDSpUqAXk009KlXGmxa8nqJ7Knh7aH3FKlXiA7Iry4NjkffX/vQra9mCDG/fypUqtwjQ2ZpblnXioyG2kFUKVKlWkQahv6so6yfIa1ltpE3cU+X7pCA8gm8/7i1NSrF7Ref7kruoZeAWhwGUII6j6rjHYnvsRZtjUC4JPMg6x0AnWj2Nb4vP8AWlSpZI0NAA6vVGkAED5qhF/fUuzkm4vnTUq7CAXtB6wuyGmE9h9FqKtYA6kdKalW/wAWLifyWUh+9qi2xsOziWtNeXN3TFgDENIIytzWcpj8o60R7sRlgZYiIERyjdFPSrPJiV51297FIE7/AAlvKQQHtINGBIAZFG4gkSBpGvDWls77KWMNfvhZglEXMRzGYmJ9D609KuglSLjS1Fn7MNn5sxW4QdyF4UeRADe5ov2a7KWcE95rJbLdyeFtcuTPoG3kHNx5U9KpFV2Si2JxapA1LHcq6nzPIdTpVO/bLkZ9QDOTcgI3Ej7x89NAQAaVKgsRI4HdBU2AarjEeJMw3AxPPgY6daosJBHPTWnpVotmDdgAHWUBifvXlVjYDNh0KgXMoyXLTGGS7bOS53bcPEpOU89IoaytbMB8p/6d8ZSegf73zpUqQRPc6aSI5gE/PmfamMsQjiZNGSCQLrTQcFy+MRWBdWRgAA6ET1yuhzCjGD7RX1/p4vOBpF3JcPTk/u1KlV02GjewFwvnR9V7D4l0hpwHPQ+SJJ2rxEQ9nD3N0wzpv8wwHvVS7jsI/ifZ0MZk2nSepJGU09KljcPE130trkXD0ITMxdp8vyFVZMJJjD4sdP7T/wDcmp8Hi7NshrWBt5hPjvXWdl66qT8xTUqtdG0ijZ/1O/8ApTMZdq4nw9lANv4q/cR3uDIl+yERFARz3iiTMlokxrE616tSpVo9lsayNzWAAA6DkFlpnl7ySv/Z"
                alt="food image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Food
                </Typography>
              </CardContent>
              <CardActions>
              <Link as={Link} to="/addFood">
                  Add
                </Link>
                <Link as={Link} to="/food">
                  View
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="data:image/jpeg;base64,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"
                alt="health info image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Health Information
                </Typography>
              </CardContent>
              <CardActions>
                <Link as={Link} to="/healthInfo">
                  Add
                </Link>
                <Link as={Link} to="/healthHistory">
                  View
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNYVZxux5tosKAVgN4Tkvz-zw5sUd3ZXbcw&usqp=CAU"
                alt="notes mage"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Notes
                </Typography>
              </CardContent>
              <CardActions>
                <Link as={Link} to="/notes">
                  Add
                </Link>
                <Link as={Link} to="/noteHistory">
                  View
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcDMFv41foIYGUbnkHGKKO2rWHEg0b8A9QA&usqp=CAU"
                alt="incidents image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Incident Reports
                </Typography>
              </CardContent>
              <CardActions>
                <Link as={Link} to="/incidents">
                  Add
                </Link>
                <Link as={Link} to="/incidentHistory">
                  View
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Activities;
