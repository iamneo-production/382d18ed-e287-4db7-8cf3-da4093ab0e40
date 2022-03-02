<<<<<<< HEAD
package com.example.demo.Model;
=======
package com.examly.springapp.model;
>>>>>>> f357ead066fa37f01d4b5c52ef7a7fc599bcb71a
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="plan_model")

public class PlanModel {

		@Id
		private int planId;
		@Column(name="planType")
		private String planType;
		@Column(name="planName")
		private String planName;
		@Column(name="planValidity")
		private String planValidity;
		@Column(name="planDetails")
		private String planDetails;
		@Column(name="planPrice")
		private String planPrice;
		
		public PlanModel() {
		}
		
		public PlanModel(int planId, String planType, String planName, String planValidity, String planDetails,
				String planPrice) {
			super();
			this.planId = planId;
			this.planType = planType;
			this.planName = planName;
			this.planValidity = planValidity;
			this.planDetails = planDetails;
			this.planPrice = planPrice;
		}
		public int getPlanId() {
			return planId;
		}
		public void setPlanId(int planId) {
			this.planId = planId;
		}
		public String getPlanType() {
			return planType;
		}
		public void setPlanType(String planType) {
			this.planType = planType;
		}
		public String getPlanName() {
			return planName;
		}
		public void setPlanName(String planName) {
			this.planName = planName;
		}
		public String getPlanValidity() {
			return planValidity;
		}
		public void setPlanValidity(String planValidity) {
			this.planValidity = planValidity;
		}
		public String getPlanDetails() {
			return planDetails;
		}
		public void setPlanDetails(String planDetails) {
			this.planDetails = planDetails;
		}
		public String getPlanPrice() {
			return planPrice;
		}
		public void setPlanPrice(String planPrice) {
			this.planPrice = planPrice;
		}
		
		
}
