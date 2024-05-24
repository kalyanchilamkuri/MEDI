// package newsapi;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.http.HttpMethod;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.stereotype.Service;
// import org.springframework.web.client.RestTemplate;

// import io.jsonwebtoken.lang.Collections;
// import jakarta.validation.constraints.Null;

// @Service
// public class NewsService {

//     @Value("${news.api.url}")
//     private String apiUrl;

//     @Autowired
//     private RestTemplate restTemplate;

//     // public List<NewsArticle> getNewsArticles() {
//     //     ResponseEntity<NewsApiResponse> response = restTemplate.exchange(
//     //             apiUrl,
//     //             HttpMethod.GET,
//     //             null,
//     //             NewsApiResponse.class
//     //     );
        
//     //     if (response.getStatusCode() == HttpStatus.OK) {
//     //         return response.getBody().getArticles();
//     //     } else {
//     //         // Handle error response
//     //         return null;
//     //     }
//     // }
// }