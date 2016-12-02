import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

import com.dbsystel.datarun.app.DataRunConfiguration;
import com.dbsystel.datarun.app.DataRunSecurityConfiguration;

public class SecurityInitializer extends AbstractSecurityWebApplicationInitializer {

        public SecurityInitializer() {
                super(DataRunSecurityConfiguration.class, DataRunConfiguration.class);
        }
}